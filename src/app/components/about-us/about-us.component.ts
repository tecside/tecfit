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
      { caption: '2019', date: new Date(2019, 12, 1), selected: true, title: 'A ideia nasce', content: 'A ideia nasce' },
      { caption: '2020', date: new Date(2020, 6, 1), title: 'A ideia ganha um nome', content: 'A ideia ganha um nome' },
      { caption: '2020', date: new Date(2021, 12, 1), title: 'A equipa foi criada', content: 'A equipa foi criada' },
      { caption: '2021', date: new Date(2022, 6, 1), title: 'Primeira sessão ao vivo no Instagram', content: 'Primeira sessão ao vivo no Instagram' },
      { caption: '2021', date: new Date(2023, 12, 1), title: 'Última sessão ao vivo no Instagram', content: 'Última sessão ao vivo no Instagram' },
      { caption: '2021', date: new Date(2024, 12, 1), title: 'O grupo é reduzido para os actuais membros', content: 'O grupo é reduzido para os actuais membros' },
    ];
    this.timeline2 = [
      { caption: '2019', date: new Date(2019, 12, 1), selected: true, title: 'The idea is born', content: 'The idea is born' },
      { caption: '2020', date: new Date(2020, 6, 1), title: 'The idea gains a name', content: 'The idea gains a name' },
      { caption: '2020', date: new Date(2021, 12, 1), title: 'The team is created', content: 'The team is created' },
      { caption: '2021', date: new Date(2022, 6, 1), title: 'First live session on Instagram', content: 'First live session on Instagram' },
      { caption: '2021', date: new Date(2023, 12, 1), title: 'Last live session on Instagram', content: 'Last live session on Instagram' },
      { caption: '2021', date: new Date(2024, 12, 1), title: 'The group is reduced to the current members', content: 'The group is reduced to the current members' },
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
