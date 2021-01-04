import { Component, ElementRef, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import firebase from "firebase/app";
import { SplashService } from '../splash.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private db:AngularFirestore, 
    private splash:SplashService, private elementRef:ElementRef,iconRegistry:MatIconRegistry,
    private sanitizer:DomSanitizer, private afAuth:AngularFireAuth) { 
    iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('./assets/show-more-button-with-three-dots.svg'));
  }

  ngOnInit(): void {
  }

  logout(){
    firebase.auth().signOut().then(()=>{
      this.router.navigate(['/signout']);
    });
  }
}
