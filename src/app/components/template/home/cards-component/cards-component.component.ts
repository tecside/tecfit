import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.scss']
})
export class CardsComponentComponent implements OnInit {

  @ViewChild('swiperWrapper') public swiperWrapper: any;

  config: any = {
    a11y: false,
    direction: 'horizontal',
    slidesPerView: 1,
    slideToClickedSlide: true,
    mousewheel: true,
    scrollbar: true,
    watchSlidesProgress: true,
    navigation: false,
    keyboard: true,
    pagination: { clickable: true },
    centeredSlides: true,
    loop: true,
    roundLengths: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    spaceBetween: 0,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {

  }
  onSlideChange() {
  }

  slideNext() {
    this.swiperWrapper.swiperRef.slideNext()
  }

  slidePrev() {
    this.swiperWrapper.swiperRef.slidePrev()
  }

  

}
