import { TimelineElement } from "./../horizontal-timeline/timeline-element";
import { Component, OnInit } from "@angular/core";
import SwiperCore, { Autoplay, EffectFade } from "swiper/core";
import { TranslateServiceApp } from '../../services/translate.service'
import { TranslateService } from "@ngx-translate/core";

SwiperCore.use([Autoplay, EffectFade]);
@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent implements OnInit {
  timeline: TimelineElement[];
  timeline2: TimelineElement[];

  constructor() {

    this.timeline = [
      { caption: '2019', date: new Date(2015, 1, 16), selected: true, title: 'Idealização', content: '' },
      { caption: '2020', date: new Date(2016, 5, 16), title: 'Criação', content: '' },
      { caption: '2021', date: new Date(2017, 5, 16), title: 'Prmeiras', content: '' },
      { caption: '2021', date: new Date(2018, 5, 16), title: 'Expansão', content: '' },
      { caption: '2020', date: new Date(2019, 5, 16), title: 'Plataforma Fitness', content: '' },
    ];
    this.timeline2 = [
      { caption: '2019', date: new Date(2015, 1, 16), selected: true, title: 'Idealization', content: '' },
      { caption: '2020', date: new Date(2016, 5, 16), title: 'Creation', content: '' },
      { caption: '2021', date: new Date(2017, 5, 16), title: 'First', content: '' },
      { caption: '2021', date: new Date(2018, 5, 16), title: 'Expansion', content: '' },
      { caption: '2020', date: new Date(2019, 5, 16), title: 'Fitness Platform', content: '' },
    ];
  }

  ngOnInit(): void {
    if (localStorage.getItem('lang') == "pt") {
      document.getElementById("timeline-pt")!.style.display = "block";
      document.getElementById("timeline-en")!.style.display = "none";
    } else {
      document.getElementById("timeline-pt")!.style.display = "none";
      document.getElementById("timeline-en")!.style.display = "block";
    }
  }

  onSwiper(swiper: any) {
    /* console.log(swiper); */
  }
  onSlideChange() {
    /* console.log("slide change"); */
  }

}
