import { Component, OnInit } from '@angular/core';
import { SplashService } from '../splash.service';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  constructor(private splash:SplashService) { }

  ngOnInit(): void {
    this.splash.setStatus(false);
  }

}
