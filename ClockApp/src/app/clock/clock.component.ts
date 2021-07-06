import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  currentTime: string | undefined;

  // the function for this.current time
  constructor(private _timeService: TimeService) {
    this._timeService.time.subscribe((now: Date) => {
      this.currentTime = now.toLocaleTimeString('en-GB')
    })
  }


  ngOnInit(): void {
  }

}
