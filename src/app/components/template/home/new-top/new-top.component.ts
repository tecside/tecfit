import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';

SwiperCore.use([EffectFade, Autoplay]);

@Component({
  selector: 'app-new-top',
  templateUrl: './new-top.component.html',
  styleUrls: ['./new-top.component.scss']
})

export class NewTopComponent implements OnInit {

  actual: number = 0;
  texts: Array<any> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.texts = [
      document.getElementById("title-1"),
      document.getElementById("title-2"),
      document.getElementById("title-3"),
      document.getElementById("title-4")
    ]
  }

  onSlideChange(): void { 
    this.texts[this.actual]?.classList.remove("active")
    this.actual++;
    if (this.actual == 4) {
      this.actual = 0;
    }
    this.texts[this.actual]?.classList.add("active")
  }
}
