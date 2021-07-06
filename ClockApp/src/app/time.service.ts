import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class TimeService {
  // define a clock variable that can only be used inside the timeservice but not accessible outside
  private clock: Observable<Date> = timer(0, 1000).pipe(
    map(tick => new Date()),
    shareReplay(1)
  );

  // return the getter function
  get time() {
    return this.clock;
  }



  constructor() { }
}
