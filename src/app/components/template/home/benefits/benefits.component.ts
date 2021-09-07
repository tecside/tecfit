import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

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
