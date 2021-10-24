import { Component, OnInit } from '@angular/core';
import Swiper, {Autoplay} from 'swiper';

Swiper.use([Autoplay])

@Component({
  selector: 'app-ambassador',
  templateUrl: './ambassador.component.html',
  styleUrls: ['./ambassador.component.scss']
})
export class AmbassadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
