import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SplashService } from '../splash.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private elementRef: ElementRef,private splash:SplashService,) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#DD7230";
    this.splash.setStatus(true);
  }

}
