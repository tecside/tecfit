import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-store-component',
  templateUrl: './store-component.component.html',
  styleUrls: ['./store-component.component.scss']
})
export class StoreComponentComponent implements OnInit {

  @ViewChild('slides') public slides: any;

  changeAlone: any

  constructor() { }

  ngOnInit(): void {
    this.changeAlone = setInterval(() => {
      this.slides.swiperRef.slideNext();
      this.onSlideChange();
    }, 3000)
  }

  onSwiper(swiper: any) {
  }

  onSlideChange() {
    clearInterval(this.changeAlone);
    this.changeAlone = setInterval(() => {
      this.slides.swiperRef.slideNext();
      this.onSlideChange();
    }, 3000)
  }

}
