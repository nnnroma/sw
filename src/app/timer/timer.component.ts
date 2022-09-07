import { Component, OnInit } from '@angular/core';
import { interval, subscribeOn, Subscription, timer, fromEvent, from } from 'rxjs';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  
  
  constructor() {

  }

  hours = 0;
  minuts = 0;
  seconds = 0;

  text:string = "pause"

  date = new Date(this.hours, this.minuts, this.seconds);  

  myTimer = timer(0, 1000);

  time!: Subscription;

  isWork = false;

  condition = 'Start';

  startTimer() {

    // if(this.isWork === false) {
      this.time = this.myTimer.subscribe(() => {
      this.seconds++
      this.date.setHours(this.hours, this.minuts, this.seconds);
      // this.isWork = true
      // this.condition = 'STOP'
    });
    // }
    // else {
    //   this.time.unsubscribe();
    //   // this.date.setHours(this.hours = 0, this.minuts = 0, this.seconds = 0);
    //   this.isWork = false;
    //   this.condition = 'Start'
    // }






    // if(this.isClick === true) {
    //   this.date.setHours(this.hours, this.minuts, this.seconds);
    //   this.time.unsubscribe();
    //   if(this.dblClick === true) {
    //     this.time = this.myTimer.subscribe(() => {
    //       // this.seconds++
    //       this.startTimer()
    //       this.date.setHours(this.hours, this.minuts, this.seconds);
    //       this.dblClick = false
    //     })
    //   }
    //   this.dblClick = true;
    // }

    // this.isClick = true;
    // timer(300).subscribe(()=> {
    //   this.isClick = false;
    // })


  }

  isClick = false;
  dblClick = false;

  pauseTime() {

    // if(this.dblClick === true) {
    //   this.time = this.myTimer.subscribe(() => {
    //     this.seconds++
    //     this.date.setHours(this.hours, this.minuts, this.seconds);
    //     this.dblClick = false
    //   })
    // } 
    if(this.isClick === true) {
      this.date.setHours(this.hours, this.minuts, this.seconds);
      this.time.unsubscribe();
      
      if(this.dblClick === true) {
        this.time = this.myTimer.subscribe(() => {
          this.seconds++
          this.date.setHours(this.hours, this.minuts, this.seconds);
          this.dblClick = false
        })
      }
      this.dblClick = true;
    }

    this.isClick = true;
    timer(300).subscribe(()=> {
      this.isClick = false;
    })





    // fromEvent(this, 'click') {

    // }
  }


  ngOnInit(): void {
    console.log('void')
  }

}