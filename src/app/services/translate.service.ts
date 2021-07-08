import { Injectable } from '@angular/core';
import {TranslateService, TranslateModule} from '@ngx-translate/core'

@Injectable({
  providedIn: 'root'
})
export class TranslateServiceApp {

  constructor(public translate: TranslateService){
    translate.addLangs(['pt', 'en']);
    translate.setDefaultLang('pt');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/pt|en/) ? browserLang: 'en')
    console.log(translate)

  }
}
