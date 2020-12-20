import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { AuthProvider } from 'ngx-auth-firebaseui';
import { SplashService } from '../splash.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  providers = AuthProvider;
  constructor(private elementRef: ElementRef,private splash:SplashService,) { }

  ngOnInit(): void {
    this.splash.setStatus(true);
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#DD7230";
  }

  printUser(thing:any){
    console.log(thing.getIdToken());
    
  }

}
