import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectCoverflow, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation]);

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})

export class ProgramsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
  }

}
