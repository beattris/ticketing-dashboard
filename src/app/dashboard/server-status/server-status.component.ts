import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  currentStatus: 'offline' | 'online' | 'unknown' = 'offline'; //this is called string literals
  private interval?: NodeJS.Timeout;

  constructor() {}

  ngOnInit() {
    console.log('On init');
    this.interval = setInterval(() => {
      const rnd = Math.random(); // return btw 0 - 0.999999 
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngAfterViewInit(){
    console.log('AFTER VIEW INITS');
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
