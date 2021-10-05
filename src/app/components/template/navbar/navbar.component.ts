import { TranslateModule } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { TranslateServiceApp } from '../../../services/translate.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './hamburguer.scss']
})
export class NavbarComponent implements OnInit {

  open: boolean = false

  constructor(public translate: TranslateServiceApp) { }

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

  openNav() {
    document.getElementById("mySidebar")!.style.width = "100%";
    setTimeout(() => { this.open = !this.open }, 300);
    document.getElementsByTagName("main")[0].classList.add("blur");
  }

  closeNav() {
    //document.getElementById("main")!.style.marginLeft = "0";
    this.open = !this.open
    setTimeout(() => {
      document.getElementById("mySidebar")!.style.width = "0"
    }, 50);
    document.getElementsByTagName("main")[0].classList.remove("blur");
  }

  changeEvent() {

  }

}
