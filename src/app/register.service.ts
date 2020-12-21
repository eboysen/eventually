import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { FirestoreSyncService } from 'ngx-auth-firebaseui';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private afAuth: AngularFireAuth,
    private db:  AngularFirestore,){}

    register(evnt:any){
      this.db.collection('users').doc(evnt.uid).set({
        projects:[]
      },
      {merge:true});
    }
    
  }