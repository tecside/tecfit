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

  paths: string[] = [
    'assets/home/phones/phone1.png', 
    'assets/home/phones/phone2.png', 
    'assets/home/phones/phone3.png', 
    'assets/home/phones/phone4.png'
  ]

  phone: string = this.paths[this.actual];

  constructor() { }

  ngOnInit(): void {
    this.changeAlone()
  }

  changeAlone(): void {
    setTimeout(() => {
      this.actual++; 
      if(this.actual == 4) {
        this.actual = 0;
      }
      this.phone = this.paths[this.actual]      
      this.changeAlone()
    }, 3000)
  }
}
