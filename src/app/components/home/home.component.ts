import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay } from 'swiper/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        navbar!.style.backgroundColor = 'black'
      } // > 0 ou outro valor desejado
      else {
        navbar!.style.backgroundColor = 'transparent'
      }
    });
  }
}
