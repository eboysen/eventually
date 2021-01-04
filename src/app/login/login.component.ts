import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { AuthProvider } from 'ngx-auth-firebaseui';
import { SplashService } from '../splash.service';
import { Router } from '@angular/router';
import { FirebaseDatabase } from 'angularfire2';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  providers = AuthProvider;
  constructor(private elementRef: ElementRef,private splash:SplashService, private router:Router, private db:AngularFirestore, private auth: AuthService) { }

  ngOnInit(): void {
    this.splash.setStatus(true);
    //this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#DD7230";
  }

  printUser(thing:any){
    console.log(thing.getIdToken());
    
  }
  redirectToRegister(){
    this.router.navigate(['/register'])
  }
  login(evnt:any){
    this.router.navigate(['/dashboard'])
  }


}
