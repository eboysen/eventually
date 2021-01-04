import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';
import firebase from "firebase/app";
import UserCredential= firebase.auth.UserCredential;
import { UserProvidedConfigToken } from 'ngx-auth-firebaseui';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements User{
  //user$:Observable<User | null>;
  user?:User;
  use:any;
  uid: any;
  authState:any = null;
  displayName: any;
  email:any;
  photourl:any;
  projectsRef:any;
  projects:any;
  projectConverter:any;

  constructor(
    private afAuth:AngularFireAuth,
    private db: AngularFirestore,
    private router:Router,
  ) { 
    
    firebase.auth().onAuthStateChanged(user=>{
      this.projects=[];
      if(user){
        //this.user = user;
        this.displayName = user.displayName;
        this.uid = user.uid;
        this.email = user.email;
        this.photourl=user.photoURL;
        db.collection("users").doc(this.uid).get().subscribe(doc=>{
          for(let project of doc.get("projects")){
            console.log(project);
            db.collection("projects").doc(project).get().subscribe(doc=>{
              this.projects.push(new Project(doc.get("title"),doc.get("description"),doc.get("tasks"),doc.get("id")));
              
            });
            console.log(this.projects);
          }
        })
        this.user ={
          displayName: this.displayName,
          uid:this.uid,
          email:this.email,
          projects:this.projectsRef,
          photoURL:this.photourl,
        }
        

      }
      else{
        return [];
      }
      return [];
    });
    this.use = firebase.auth().currentUser;
    //console.log(this.user);
    
  }

  
  thing(stuff:any){
    console.log(stuff);
    this.user=stuff;
    console.log(this.user);
  }

  
  
  
}
