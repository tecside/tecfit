import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-component',
  templateUrl: './top-component.component.html',
  styleUrls: ['./top-component.component.scss']
})
export class TopComponentComponent implements OnInit {

  public page: number = 0
  pageName: String
  pageNameArray: string[] = ['Gym', 'outra', 'outra'];

  constructor() {
    this.pageName = this.pageNameArray[0]
   }

  ngOnInit(): void {
  }

  next(){
    
    this.page +=1;
    console.log(this.page)
    console.log(this.pageNameArray[this.page])
    if(this.pageNameArray.length > this.page){
      this.page = 0
      this.pageName = this.pageNameArray[this.page]
    }else{ 
      this.pageName = this.pageNameArray[this.page]
    }
  }

  previus(){

  }
}
