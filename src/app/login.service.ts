import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }
}
