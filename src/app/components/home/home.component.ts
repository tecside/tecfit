import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay } from 'swiper/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./treinos.scss', './glitch.scss', './home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('swiperWrapper') public swiperWrapper: any;

  config: any = {
    a11y: false,
    direction: 'horizontal',
    slidesPerView: 1,
    slideToClickedSlide: true,
    mousewheel: true,
    scrollbar: true,
    watchSlidesProgress: true,
    navigation: false,
    keyboard: true,
    pagination: { clickable: true },
    centeredSlides: true,
    loop: true,
    roundLengths: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    spaceBetween: 0,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    let script = document.createElement("script")
    script.type = "text/javascript";
    script.innerHTML = "let glitch,isLoaded=!1;function setup(){let i=document.getElementById('img').getBoundingClientRect(),t=i.height+700,e=i.width+700;createCanvas(e,t),document.getElementById('img').appendChild(canvas),loadImage('./assets/home/first.jpeg',function(i){glitch=new Glitch(i),isLoaded=!0})}function draw(){isLoaded&&glitch.show()}class Glitch{constructor(i){this.channelLen=4,this.imgOrigin=i,this.imgOrigin.loadPixels(),this.copyData=[],this.flowLineImgs=[],this.shiftLineImgs=[],this.shiftRGBs=[],this.scatImgs=[],this.throughFlag=!0,this.copyData=new Uint8ClampedArray(this.imgOrigin.pixels);for(let i=0;i<1;i++){let i={pixels:null,t1:floor(random(0,1e3)),speed:floor(random(4,24)),randX:floor(random(24,80))};this.flowLineImgs.push(i)}for(let i=0;i<6;i++){let i=null;this.shiftLineImgs.push(i)}for(let i=0;i<1;i++){let i=null;this.shiftRGBs.push(i)}for(let i=0;i<3;i++){let i={img:null,x:0,y:0};this.scatImgs.push(i)}}replaceData(i,t){for(let e=0;e<i.height;e++)for(let h=0;h<i.width;h++){let s,l,n,r,o;s=o=(e*i.width+h)*this.channelLen,l=o+1,n=o+2,r=o+3,i.pixels[s]=t[s],i.pixels[l]=t[l],i.pixels[n]=t[n],i.pixels[r]=t[r]}i.updatePixels()}flowLine(i,t){let e,h;e=new Uint8ClampedArray(i.pixels),t.t1%=i.height,t.t1+=t.speed,h=floor(t.t1);for(let s=0;s<i.height;s++)if(h===s)for(let h=0;h<i.width;h++){let l,n,r,o,g;n=(g=(s*i.width+h)*this.channelLen)+1,r=g+2,o=g+3,e[l=g]=i.pixels[l]+t.randX,e[n]=i.pixels[n]+t.randX,e[r]=i.pixels[r]+t.randX,e[o]=i.pixels[o]}return e}shiftLine(i){let t,e,h,s,l;s=new Uint8ClampedArray(i.pixels),l=i.height,h=(e=floor(random(0,l)))+floor(random(1,l-e)),t=this.channelLen*floor(random(-40,40));for(let l=0;l<i.height;l++)if(l>e&&l<h)for(let e=0;e<i.width;e++){let h,n,r,o,g,a,m,d;o=(d=(l*i.width+e)*this.channelLen)+3,g=(h=d)+t,a=(n=d+1)+t,m=(r=d+2)+t,s[h]=i.pixels[g],s[n]=i.pixels[a],s[r]=i.pixels[m],s[o]=i.pixels[o]}return s}shiftRGB(i){let t,e,h,s,l;l=16,s=new Uint8ClampedArray(i.pixels),t=(floor(random(-16,16))*i.width+floor(random(-16,16)))*this.channelLen,e=(floor(random(-16,16))*i.width+floor(random(-16,16)))*this.channelLen,h=(floor(random(-16,16))*i.width+floor(random(-16,16)))*this.channelLen;for(let l=0;l<i.height;l++)for(let n=0;n<i.width;n++){let r,o,g,a,m,d,f,p;o=(p=(l*i.width+n)*this.channelLen)+1,g=p+2,a=p+3,m=((r=p)+t)%i.pixels.length,d=(o+e)%i.pixels.length,f=(g+h)%i.pixels.length,s[r]=i.pixels[m],s[o]=i.pixels[d],s[g]=i.pixels[f],s[a]=i.pixels[a]}return s}getRandomRectImg(i){let t,e,h,s,l;return t=floor(random(0,i.width-30)),e=floor(random(0,i.height-50)),h=floor(random(30,i.width-t)),s=floor(random(1,50)),(l=i.get(t,e,h,s)).loadPixels(),l}show(){if(this.replaceData(this.imgOrigin,this.copyData),floor(random(100))>75&&this.throughFlag&&(this.throughFlag=!1,setTimeout(()=>{this.throughFlag=!0},floor(random(100,1e3)))),!this.throughFlag)return push(),translate((width-this.imgOrigin.width)/2,(height-this.imgOrigin.height)/2),image(this.imgOrigin,0,0),void pop();this.flowLineImgs.forEach((i,t,e)=>{e[t].pixels=this.flowLine(this.imgOrigin,i),e[t].pixels&&this.replaceData(this.imgOrigin,e[t].pixels)}),this.shiftLineImgs.forEach((i,t,e)=>{floor(random(100))>50?(e[t]=this.shiftLine(this.imgOrigin),this.replaceData(this.imgOrigin,e[t])):e[t]&&this.replaceData(this.imgOrigin,e[t])}),this.shiftRGBs.forEach((i,t,e)=>{floor(random(100))>65&&(e[t]=this.shiftRGB(this.imgOrigin),this.replaceData(this.imgOrigin,e[t]))}),push(),translate((width-this.imgOrigin.width)/2,(height-this.imgOrigin.height)/2),image(this.imgOrigin,0,0),pop(),this.scatImgs.forEach(i=>{push(),translate((width-this.imgOrigin.width)/2,(height-this.imgOrigin.height)/2),floor(random(100))>80&&(i.x=floor(random(.3*-this.imgOrigin.width,.7*this.imgOrigin.width)),i.y=floor(random(.1*-this.imgOrigin.height,this.imgOrigin.height)),i.img=this.getRandomRectImg(this.imgOrigin)),i.img&&image(i.img,i.x,i.y),pop()})}}"
    
    document.getElementsByTagName("html")[0].appendChild(script)
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  slideNext() {
    this.swiperWrapper.swiperRef.slideNext()
  }

  slidePrev() {
    this.swiperWrapper.swiperRef.slidePrev()
  }

}
