import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay, Mousewheel } from 'swiper/core';
SwiperCore.use([Mousewheel]);

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

  @ViewChild('slides') public slides: any;

  constructor() { }

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


}
