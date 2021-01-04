import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { fromEventPattern, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import firebase from "firebase/app";
import UserCredential= firebase.auth.UserCredential;
import { UserProvidedConfigToken } from 'ngx-auth-firebaseui';
//import { Project } from './project.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SplashService } from 'src/app/splash.service'
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  private id:any;
  private title: any;
  private description:any;
  private tasks:any;
  constructor(private router:Router, private route:ActivatedRoute, private db:AngularFirestore, 
    private splash:SplashService, private elementRef:ElementRef,iconRegistry:MatIconRegistry,
    private sanitizer:DomSanitizer) { 
    iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('./assets/show-more-button-with-three-dots.svg'));
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#FFFFFF";
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.db.collection('projects').doc(this.id).get().subscribe(doc=>{
        this.title=doc.get("title");
        this.description=doc.get("description");
        this.tasks = doc.get("tasks");
        this.splash.setStatus(true);
      })
    })
  }

}
