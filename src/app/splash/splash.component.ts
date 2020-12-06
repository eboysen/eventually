import { ElementRef, EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { 
  trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';
import { preserveWhitespacesDefault } from '@angular/compiler';


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
  

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    //initializes that desired background color for this page on startup
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#F8F6DD";
  }

  LoginEnter(){
    this.isLogin = true;
    this.label = "LogIn";
    this.fireEvent();
  }
  LoginExit(){
    this.isLogin = false;
    this.label = "Welcome";
    this.fireEvent();
  }
  LogOnEnter(){
    this.isLogon = true;
    this.label = "Log On";
    this.fireEvent();
  }
  LogOnExit(){
    this.isLogon = false;
    this.label = "Welcome";
    this.fireEvent();
  }
  AboutEnter(){
    this.isAbout = true;
    this.label = "About Us";
    this.fireEvent();
  }
  AboutExit(){
    this.isAbout = false;
    this.label = "Welcome";
    this.fireEvent();
  }
  @Output() 
  public childEvent= new EventEmitter();
  fireEvent(){
    this.childEvent.emit(this.isAbout||this.isLogin||this.isLogon)
  }
}
