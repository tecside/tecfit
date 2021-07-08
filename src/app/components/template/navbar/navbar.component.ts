import { TranslateModule } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
 import {TranslateServiceApp} from '../../../services/translate.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./hamburguer.scss', './navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  open: boolean = false

  constructor(public translate: TranslateServiceApp) { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("mySidebar")!.style.width = "250px";
    document.getElementById("main")!.style.marginLeft = "250px";
    this.open = true
  }

  closeNav() {
    document.getElementById("mySidebar")!.style.width = "0";
    document.getElementById("main")!.style.marginLeft = "0";
    this.open = false
  }

}
