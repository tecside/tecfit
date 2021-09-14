import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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

  
  openDialog() {
    const dialogRef = this.dialog.open(DialogVideoNutritionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'dialog-delete',
  styleUrls: ['./nutrition.component.scss'],
  templateUrl: 'dialog-video-nutrition.component.html',
})
export class DialogVideoNutritionComponent {}
