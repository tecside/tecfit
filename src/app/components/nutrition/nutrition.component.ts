import { Component, OnInit } from '@angular/core';

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
    document.getElementById("start")!.style.backgroundColor = "#fff";
    document.getElementById("start")!.style.color = "#000";
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log("slide change");
  }

}
