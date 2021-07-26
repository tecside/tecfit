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

import {TranslateServiceApp} from './services/translate.service'
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { TopComponentComponent } from './components/template/home/top-component/top-component.component';
import { CardsComponentComponent } from './components/template/home/cards-component/cards-component.component';
import { GlitchComponentComponent } from './components/template/home/glitch-component/glitch-component.component';
import { TrainSmarterComponentComponent } from './components/template/home/train-smarter-component/train-smarter-component.component';
import { RecipesComponentComponent } from './components/template/home/recipes-component/recipes-component.component';
import { PlansComponentComponent } from './components/template/home/plans-component/plans-component.component';
import { StoreComponentComponent } from './components/template/home/store-component/store-component.component';
import { NutritionComponent } from './components/nutrition/nutrition.component';
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http)
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
    NutritionComponent
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
