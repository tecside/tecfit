import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-receipts-video',
  templateUrl: './receipts-video.component.html',
  styleUrls: ['./receipts-video.component.scss']
})
export class ReceiptsVideoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogVideoHomeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
  
@Component({
  selector: 'dialog-delete',
  styleUrls: ['./receipts-video.component.scss'],
  templateUrl: 'dialog-video-home.component.html',
})
export class DialogVideoHomeComponent {}