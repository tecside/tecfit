import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay, Mousewheel } from 'swiper/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
SwiperCore.use([Mousewheel]);

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss', './glitch.scss']
})
export class WorkoutsComponent implements OnInit {

  @ViewChild('slides') public slides: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
  }
  onSlideChange() {
  }

  slide(next: boolean): void {
    if (next) {
      this.slides.swiperRef.slideNext()
    } else {
      this.slides.swiperRef.slidePrev()
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogVideoWorkoutComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}

@Component({
  selector: 'dialog-delete',
  styleUrls: ['workouts.component.scss'],
  templateUrl: 'dialog-video-workout.component.html',
})
export class DialogVideoWorkoutComponent {}
