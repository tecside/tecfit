import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

SwiperCore.use([Pagination, EffectCoverflow]);

@Component({
  selector: 'app-new-programs-mobile',
  templateUrl: './new-programs-mobile.component.html',
  styleUrls: ['./new-programs-mobile.component.scss']
})
export class NewProgramsMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
