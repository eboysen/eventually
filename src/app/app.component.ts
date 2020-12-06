import { Component } from '@angular/core';
import { 
  trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';
import { bindCallback } from 'rxjs';

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
      transition('standard => orange', [animate('1.5s')]),
      transition('orange => standard', [animate('1.5s')]),
    ]),
  ]
})
export class AppComponent {
  title = 'eventually';
  status = false;
}
