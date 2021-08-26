import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipts-video',
  templateUrl: './receipts-video.component.html',
  styleUrls: ['./receipts-video.component.scss']
})
export class ReceiptsVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  play(): void {
    document.getElementsByTagName("video")[0].style.display = "block";
    document.getElementById("video")!.style.display = "none"
  }

}
