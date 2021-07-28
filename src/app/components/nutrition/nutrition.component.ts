import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, EffectFade } from "swiper/core";
@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementsByTagName("nav")[0].style.backgroundColor = "#239f3a";
    document.getElementById("mySidebar")!.style.backgroundColor = "#239f3a";
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log("slide change");
  }

}
