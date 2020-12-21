import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { SplashService } from '../splash.service';
//import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private elementRef: ElementRef,private splash:SplashService, private router:Router, private db:AngularFirestore) { }

  ngOnInit(): void {
    this.splash.setStatus(true);
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#DD7230";
  }

  redirectToLogin(){
    this.router.navigate(['/login']);
  }

  registration(event:any){
    this.db.collection('users').doc(event.uid).set({
      projects:["Project1","Project2"]
    },
    {merge:true});
  }
  

}
