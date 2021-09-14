import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-component',
  templateUrl: './top-component.component.html',
  styleUrls: ['./top-component.component.scss']
})
export class TopComponentComponent implements OnInit {

  public page: number = 0
  public pageWeb: number = 0
  pageName: String
  pageNameArray: string[] = ['Gym', 'Bodyweight'];
  pageNameWeb: String
  pageNameArrayWeb: string[] = ['Queen'];
  header: string
  headerImage1: String
  headerImage2: String
  headerImage3: String
  headerImage4: String
  changeAlone: any

  constructor() {
    this.pageName = this.pageNameArray[0]
    this.pageNameWeb = this.pageNameArrayWeb[0]
    this.header = "../../../../../assets/home/" + this.pageNameArrayWeb[this.pageWeb] + ".jpeg"
    this.headerImage1 = "../../../assets/home/header-image-01.jpg"
    this.headerImage2 = "../../../assets/home/header-image-02.jpg"
    this.headerImage3 = "../../../assets/home/header-image-03.jpg"
    this.headerImage4 = "../../../assets/home/header-image-04.jpg"
  }

  ngOnInit(): void {
    this.changeAlone = setInterval(() => {
      this.next();
      this.nextWeb();
    }, 10000)
  }

  next() {

    this.page += 1;
    if (this.pageNameArray.length <= this.page) {
      this.page = 0
      this.pageName = this.pageNameArray[this.page]
    } else {
      this.pageName = this.pageNameArray[this.page]
    }

    this.headerImage1 = "../../../assets/home/header-image-" + this.page + "1.jpg"

    setTimeout(() => {
      this.headerImage2 = "../../../assets/home/header-image-" + this.page + "2.jpg"
    }, 50);

    setTimeout(() => {
      this.headerImage3 = "../../../assets/home/header-image-" + this.page + "3.jpg"
    }, 100);

    setTimeout(() => {
      this.headerImage4 = "../../../assets/home/header-image-" + this.page + "4.jpg"
    }, 150);

    clearInterval(this.changeAlone);

    this.changeAlone = setInterval(() => {
      this.next();
    }, 10000)
  }

  nextWeb() {

    this.pageWeb += 1;
    if (this.pageNameArrayWeb.length <= this.pageWeb) {
      this.pageWeb = 0
      this.pageNameWeb = this.pageNameArrayWeb[this.pageWeb]
    } else {
      this.pageNameWeb = this.pageNameArrayWeb[this.pageWeb]
    }

    this.header = "../../../assets/home/" + this.pageNameArrayWeb[this.pageWeb] + ".jpeg"

    clearInterval(this.changeAlone);

    this.changeAlone = setInterval(() => {
      this.nextWeb();
    }, 10000)
  }

  previous() {
    this.page -= 1;

    if (0 > this.page) {
      this.page = this.pageNameArray.length - 1
      this.pageName = this.pageNameArray[this.page]
    } else {
      this.pageName = this.pageNameArray[this.page]
    }

    this.headerImage4 = "../../../assets/home/header-image-" + this.page + "4.jpg"

    setTimeout(() => {
      this.headerImage3 = "../../../assets/home/header-image-" + this.page + "3.jpg"
    }, 50);

    setTimeout(() => {
      this.headerImage2 = "../../../assets/home/header-image-" + this.page + "2.jpg"
    }, 100);

    setTimeout(() => {
      this.headerImage1 = "../../../assets/home/header-image-" + this.page + "1.jpg"
    }, 150);

    clearInterval(this.changeAlone);

    this.changeAlone = setInterval(() => {
      this.next();
    }, 10000)
  }

  previousWeb() {
    this.pageWeb -= 1;

    if (0 > this.pageWeb) {
      this.pageWeb = this.pageNameArrayWeb.length - 1
      this.pageNameWeb = this.pageNameArrayWeb[this.pageWeb]
    } else {
      this.pageNameWeb = this.pageNameArrayWeb[this.pageWeb]
    }

    this.header = "../../../assets/home/" + this.pageNameArrayWeb[this.pageWeb] + ".jpeg"

    clearInterval(this.changeAlone);

    this.changeAlone = setInterval(() => {
      this.nextWeb();
    }, 10000)
  }

  discoverMore(): void {

  }


}
