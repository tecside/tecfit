import { TranslateModule } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
 import {TranslateServiceApp} from '../../../services/translate.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './hamburguer.scss']
})
export class NavbarComponent implements OnInit {

  open: boolean = false

  constructor(public translate: TranslateServiceApp) { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("mySidebar")!.style.width = "16rem";
    

    setTimeout(() => {  this.open = !this.open }, 300);
    
    

    
  }

  closeNav() {
    
    //document.getElementById("main")!.style.marginLeft = "0";
    this.open = !this.open
    setTimeout(() => {   
      document.getElementById("mySidebar")!.style.width = "0"
    }, 50);
   
  }

  changeEvent() {

  }

}
