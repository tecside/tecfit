import { Component, OnInit } from '@angular/core';
import SwiperCore, {Autoplay, Mousewheel}   from 'swiper/core';
SwiperCore.use([Mousewheel]);

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  

}
