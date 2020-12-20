import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SplashService } from '../splash.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private elementRef: ElementRef,private splash:SplashService,) { }

  ngOnInit(): void {
    this.splash.setStatus(true);
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#DD7230";
  }

}
