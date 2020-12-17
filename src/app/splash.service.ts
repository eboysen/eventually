import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplashService {

  private status = new BehaviorSubject<boolean>(false);

  constructor() { }

  setStatus(stat: boolean){
    this.status.next(stat);
  }

  getStatus():Observable<boolean>{
    return this.status.asObservable();
  }
}
