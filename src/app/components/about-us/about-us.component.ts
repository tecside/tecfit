/* import { TimelineElement } from "./../horizontal-timeline/timeline-element"; */
import { Component, OnInit } from "@angular/core";
import SwiperCore, { Autoplay, EffectCoverflow, Navigation } from "swiper/core";

SwiperCore.use([EffectCoverflow, Navigation, Autoplay]);

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    
    
  }
  onSlideChange() {
    
  }

}
