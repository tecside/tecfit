import { HorizontalTimelineComponent } from './components/horizontal-timeline/horizontal-timeline.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SwiperModule } from 'swiper/angular';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

import {TranslateServiceApp} from './services/translate.service'
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { WorkoutsComponent, DialogVideoWorkoutComponent } from './components/workouts/workouts.component';
import { TopComponentComponent } from './components/template/home/top-component/top-component.component';
import { CardsComponentComponent } from './components/template/home/cards-component/cards-component.component';
import { GlitchComponentComponent } from './components/template/home/glitch-component/glitch-component.component';
import { TrainSmarterComponentComponent } from './components/template/home/train-smarter-component/train-smarter-component.component';
import { RecipesComponentComponent } from './components/template/home/recipes-component/recipes-component.component';
import { PlansComponentComponent } from './components/template/home/plans-component/plans-component.component';
import { StoreComponentComponent } from './components/template/home/store-component/store-component.component';
import { NutritionComponent, DialogVideoNutritionComponent } from './components/nutrition/nutrition.component';
import { TermsComponent } from './components/terms/terms.component';
import { PartnershipComponent } from './components/partnership/partnership.component';
import { AmbassadorComponent } from './components/ambassador/ambassador.component';
import { ProgramsComponent } from './components/template/programs/programs.component';
import { ReceiptsVideoComponent, DialogVideoHomeComponent } from './components/template/home/receipts-video/receipts-video.component';
import { BenefitsComponent } from './components/template/home/benefits/benefits.component';
import { LoginComponent } from './components/login/login.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { NewTopComponent } from './components/template/home/new-top/new-top.component';
import { NewProgramsComponent } from './components/template/new-programs/new-programs.component';
import { WordsSlideComponent } from './components/template/home/words-slide/words-slide.component';
import { MeetAmbassadorsComponent } from './components/template/home/meet-ambassadors/meet-ambassadors.component';
import { ExemplosComponent } from './components/template/home/exemplos/exemplos.component';
import { TopSlidesMobileComponent } from './components/template/home/top-slides-mobile/top-slides-mobile.component';
import { NewProgramsMobileComponent } from './components/template/new-programs-mobile/new-programs-mobile.component';
import { NewProgramsMobileProgramsComponent } from './components/template/new-programs-mobile-programs/new-programs-mobile-programs.component';
import { LoginFooterComponent } from './components/login-footer/login-footer.component';
import { FitblogComponent } from './components/template/fitblog/fitblog.component';
import { TopAboutUsComponent } from './components/template/top-about-us/top-about-us.component';
import { AboutusWhatWeBeliveInComponent } from './components/template/aboutus-what-we-belive-in/aboutus-what-we-belive-in.component';
import { JoinusComponent } from './components/template/joinus/joinus.component';
import { TopAmbassadorsComponent } from './components/template/top-ambassadors/top-ambassadors.component';
import { AmbassadorsWhoAreTheyComponent } from './components/template/ambassadors-who-are-they/ambassadors-who-are-they.component';
import { PriceComponent } from './components/price/price.component';
import { PickYourPremiumComponent } from './components/template/pick-your-premium/pick-your-premium.component';
import { DontMissASquatComponent } from './components/template/dont-miss-asquat/dont-miss-asquat.component';
import { TrainAnytimeComponent } from './components/template/train-anytime/train-anytime.component';
import { ContactsFormComponent } from './components/template/contacts-form/contacts-form.component';
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    WorkoutsComponent,
    HorizontalTimelineComponent,
    TopComponentComponent,
    CardsComponentComponent,
    GlitchComponentComponent,
    TrainSmarterComponentComponent,
    RecipesComponentComponent,
    PlansComponentComponent,
    StoreComponentComponent,
    NutritionComponent,
    TermsComponent,
    PartnershipComponent,
    AmbassadorComponent,
    ProgramsComponent,
    ReceiptsVideoComponent,
    BenefitsComponent,
    DialogVideoHomeComponent,
    DialogVideoNutritionComponent,
    DialogVideoWorkoutComponent,
    LoginComponent,
    FaqsComponent,
    ContactsComponent,
    CookiesComponent,
    NewTopComponent,
    NewProgramsComponent,
    WordsSlideComponent,
    MeetAmbassadorsComponent,
    ExemplosComponent,
    TopSlidesMobileComponent,
    NewProgramsMobileComponent,
    NewProgramsMobileProgramsComponent,
    LoginFooterComponent,
    FitblogComponent,
    TopAboutUsComponent,
    AboutusWhatWeBeliveInComponent,
    JoinusComponent,
    TopAmbassadorsComponent,
    AmbassadorsWhoAreTheyComponent,
    PriceComponent,
    PickYourPremiumComponent,
    DontMissASquatComponent,
    TrainAnytimeComponent,
    ContactsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    HttpClientModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatSelectModule,
    MatIconModule
  ],
  providers: [TranslateServiceApp],
  bootstrap: [AppComponent]
})
export class AppModule { }
