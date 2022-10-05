import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';



@Injectable()
export class AuthService {
  userCol: AngularFirestoreCollection<any>;
  constructor(
   public afAuth: AngularFireAuth,
    private router: Router,
    public afs: AngularFirestore
 ) {

    this.userCol = this.afs.collection<any>('users');
 }

  doAnonymousLogin() {
    return this.afAuth.auth.signInAnonymously();
  }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }

  doGitHubLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GithubAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }

  doTwitterLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.TwitterAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

  createUser(dados) {
    const bairro = dados.bairro;
    const complemento = dados.complemento;
    const password = 'sanep01';
    const email = dados.email;
    const endereco = dados.endereco;
    const firstname = dados.firstname;
    const lastname = dados.lastname;
    const observacao = dados.observacao;
    const phone = dados.phone;

    console.log('service', dados)
     return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((credential: firebase.auth.UserCredential) => {

        const userDados = {
          bairro: bairro,
          complemento: complemento,
          email: email,
          endereco: firstname,
          lastname: lastname,
          observacao: observacao,
          phone: phone,
          id: credential.user.uid
        }

        this.addUser(userDados);

      }).catch(error => {
        return error;
      });

  }


async addUser(userDados): Promise < void> {
  userDados.datePub = new Date();
  userDados.monthPub = new Date().getMonth() + 1;
  userDados.yearPub = new Date().getFullYear();

  await this.userCol.add(JSON.parse(JSON.stringify(userDados)));

}

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        localStorage.removeItem('currentUser');
        this.afAuth.auth.signOut();
        resolve();
      } else {
        localStorage.removeItem('currentUser');
        reject();
      }
    });
  }


}
