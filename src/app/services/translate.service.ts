import { Injectable } from "@angular/core";
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class TranslateServiceApp {

  actualLang: string | null;

  constructor(public translate: TranslateService) {
    translate.addLangs(["pt", "en"]);
    translate.setDefaultLang("en");
    const browserLang = translate.getBrowserLang();

    const lang = localStorage.getItem("lang");
    translate.use(
      lang != null ? lang : browserLang.match(/pt|en/) ? browserLang : "en"
    );
    localStorage.setItem("lang", translate.currentLang);
    this.actualLang = localStorage.getItem('lang')

  }

  changeLocale(locale: string) {
    this.translate.use(locale);
    localStorage.setItem("lang", locale);
  }

}
