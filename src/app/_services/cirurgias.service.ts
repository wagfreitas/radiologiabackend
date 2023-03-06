import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import 'firebase/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CirurgiasService {
  regCol: AngularFirestoreCollection<any>;
  exaCol: AngularFirestoreCollection<any>;
  itemDoc: AngularFirestoreDocument<any>;


  constructor(private afs: AngularFirestore) {
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

  getAll() {
    return this.afs.collection('registros')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(doc => {
            const data = doc.payload.doc.data();
            return { data}});
        })
      );
  }

  createMascara(doc, record) {
    console.log(record)
    console.log(Object.assign({}, record));
    return this.afs.collection('mascaras').doc(doc).set(JSON.parse(JSON.stringify(Object.assign({}, record))));
  }



}
