import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CirurgiasService {
  regCol: AngularFirestoreCollection<any>;
  exaCol: AngularFirestoreCollection<any>;
  itemDoc: AngularFirestoreDocument<any>;
  registerByFilter: AngularFireDatabase;


  constructor(
    private afs: AngularFirestore,
    private db: AngularFireDatabase
    ) {
    this.regCol = this.afs.collection<any>('registros');
    this.exaCol = this.afs.collection<any>('exames');
   }

  insert(cirurgia: any) {
    this.regCol.add(JSON.parse(JSON.stringify(cirurgia))).then(res => {
      console.log('resultado recebido', res)
    //  this.showToast('Registros Incluidos com Sucesso')
    });
  }

  update(cirurgia: any, key: string) {
    this.regCol.doc('key').set(cirurgia).then(res => {
      console.log('update feito', res )
    }).catch((error: any) => {
        console.error(error);
      });
  }

  getAll(): Observable<any[]>{
    return this.afs.collection('mascaras')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(doc => {
            const data = doc.payload.doc.data();
            const id = doc.payload.doc.id
            return { id}});
        })
      );
  }

  getByName(nomeMascara: string): Observable<any> {
    console.log(nomeMascara)
    return this.afs.collection('mascaras').doc(nomeMascara).valueChanges()
        
  }

  createMascara(doc, record) {
    return this.afs.collection('mascaras').doc(doc).set(JSON.parse(JSON.stringify(Object.assign({}, record))));
  }

  editMascara(doc, record) {
    return this.afs.collection('mascaras').doc(doc).update(JSON.parse(JSON.stringify(Object.assign({}, record))))
  }

  deleteMascara(doc) {
    console.log(doc)
    return this.afs.collection('mascaras').doc(doc).delete();
  }

}
