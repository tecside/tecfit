import { TimelineElement } from "./../horizontal-timeline/timeline-element";
import { Component, OnInit } from "@angular/core";
import SwiperCore, { Autoplay } from "swiper/core";

SwiperCore.use([Autoplay]);
@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent implements OnInit {
  timeline: TimelineElement[];

  constructor() {
    this.timeline = [
      { caption: '2019', date: new Date(2015, 1, 16),selected: true, title: 'Idealização', content: '' },
      { caption: '2020', date: new Date(2016, 5, 16), title: 'Criação', content: '' },
      { caption: '2021', date: new Date(2017, 5, 16), title: 'Prmeiras', content: '' },
      { caption: '2021', date: new Date(2018, 5, 16), title: 'Expansão', content: '' },
      { caption: '2020', date: new Date(2019, 5, 16), title: 'Plataforma Fitness', content: '' },
      ];
  }

  ngOnInit(): void {}

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log("slide change");
  }

}
