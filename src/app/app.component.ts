import { Component, ElementRef } from '@angular/core';
import { 
  trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';
import { bindCallback } from 'rxjs';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { SplashService } from './splash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('hoverButton',[
      state('orange',style({
        backgroundColor: '#DD7230',
        color: "white",
      })),
      state('standard',style({
        backgroundColor: '#F8F6DD',
        color:"black",
      })),
      transition('standard => orange', [animate('.5s')]),
      transition('orange => standard', [animate('.5s')]),
    ]),
  ]
})
export class AppComponent {
  title = 'eventually';
  status:boolean=false;

 

  constructor(private splash:SplashService){
    splash.getStatus().subscribe(
      x=>this.status =x,
      err => console.log(err),
      () => console.log('Complete')
    )
  }
 
}

