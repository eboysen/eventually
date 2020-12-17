import { ElementRef, EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { 
  trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';
import { preserveWhitespacesDefault } from '@angular/compiler';
import {SplashService} from '../splash.service';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  animations:[
    trigger('hoverButton',[
      state('orange',style({
        color: "white",
      })),
      state('standard',style({
        color: 'black',
      })),
      transition('standard <=> orange', [animate('0s')]),
    ]),
  ]
})
export class SplashComponent implements OnInit {

  isLogin = false;
  isLogon = false;
  isAbout = false;
  label = "Welcome";
  

  constructor(private elementRef: ElementRef,private splash:SplashService,) {
    
   }

  ngOnInit(): void {
    //initializes that desired background color for this page on startup
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#F8F6DD";
  }

  LoginEnter(){
    this.isLogin = true;
    this.label = "Log In";
    this.splash.setStatus(this.isAbout||this.isLogin||this.isLogon);
    
  }
  LoginExit(){
    this.isLogin = false;
    this.label = "Welcome";
    this.splash.setStatus(this.isAbout||this.isLogin||this.isLogon);
    
  }
  LogOnEnter(){
    this.isLogon = true;
    this.label = "Log On";
    this.splash.setStatus(this.isAbout||this.isLogin||this.isLogon);
  }
  LogOnExit(){
    this.isLogon = false;
    this.label = "Welcome";
    this.splash.setStatus(this.isAbout||this.isLogin||this.isLogon);
  }
  AboutEnter(){
    this.isAbout = true;
    this.label = "About Us";
    this.splash.setStatus(this.isAbout||this.isLogin||this.isLogon);
  }
  AboutExit(){
    this.isAbout = false;
    this.label = "Welcome";
    this.splash.setStatus(this.isAbout||this.isLogin||this.isLogon);
  }
  @Output() 
  public childEvent= new EventEmitter();
  fireEvent(){
    this.childEvent.emit(this.isAbout||this.isLogin||this.isLogon)
  }
}
