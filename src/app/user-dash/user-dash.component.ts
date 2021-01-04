import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { SplashService } from '../splash.service';
import { AngularFirestore } from '@angular/fire/firestore'
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { Project } from '../project.model';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  constructor(private splash:SplashService, private db:AngularFirestore, public auth:AuthService,private elementRef: ElementRef, private router:Router) { }
  user?:User;
  ngOnInit(): void {
    this.splash.setStatus(false);
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#809BCE";
    console.log(this.auth.user)
    this.user = {
      displayName: this.auth.displayName,
      uid: this.auth.uid,
      email: this.auth.email,
      photoURL: this.auth.photourl,
      projects: this.auth.projects,
    }
    
    
  }
  onSelect(id:any){
    this.router.navigate(['/projects', id])
  }

}
