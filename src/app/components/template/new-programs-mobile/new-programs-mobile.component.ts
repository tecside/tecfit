import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

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
