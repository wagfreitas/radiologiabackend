import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

import 'firebase/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import cadExames from '../shared/exames.model';


@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private dbPath = '/exames';

  examesRef: AngularFirestoreCollection<cadExames>;
  //examesRef: AngularFireList<any>;    // Reference to exame data list, its an Observable
  exameRef: AngularFireObject<any>;

  regCol: AngularFirestoreCollection<any>;
  itemDoc: AngularFirestoreDocument<any>;
  invoiceCol: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private afs: AngularFirestore,
    private db: AngularFireDatabase) {

      this.examesRef = afs.collection(this.dbPath);

  }

  getAll(): Observable<any>  {

  this.regCol = this.afs.collection<any>('exames');
    this.items = this.regCol.snapshotChanges().pipe(
        map(actions => {
        return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        });
        })
    );
  return this.items;
 }

 gravarExames(exame: any) {
  console.log(Object.assign({}, exame));
  this.regCol.add(JSON.parse(JSON.stringify(exame))).then(res => {
    console.log('resultado recebido', res)
    return res
  //  this.showToast('Registros Incluidos com Sucesso')
  });
}

create(exames: cadExames): any {
  return this.examesRef.add({ ...exames });
}

// Fetch Single exame Object
GetExame(id: string) {
  this.exameRef = this.db.object('exames/' + id);
  return this.exameRef;
}

updateExame(id: string) {
 this.afs.collection(this.dbPath).doc(id).set({
   status: "Baixado"
 }, { merge: true });
}


// Fetch exames List





}
