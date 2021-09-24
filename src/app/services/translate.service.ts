import { Injectable } from "@angular/core";
import { ActivatedRoute, Router, RouterLinkActive } from "@angular/router";
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class TranslateServiceApp {

  actualLang: string | null;

  constructor(public translate: TranslateService, private router: Router) {
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
    this.actualLang = locale;

    if (String(this.router.url).includes("/about-us")) {
      if (localStorage.getItem('lang') == "pt") {
        document.getElementById("timeline-pt")!.style.display = "block";
        document.getElementById("timeline-en")!.style.display = "none";
      } else {
        document.getElementById("timeline-pt")!.style.display = "none";
        document.getElementById("timeline-en")!.style.display = "block";
      }

      window.location.reload();
    }
  }
}
