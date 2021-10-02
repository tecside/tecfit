import { NutritionComponent } from './components/nutrition/nutrition.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { WorkoutsComponent } from "./components/workouts/workouts.component";
import { TermsComponent } from './components/terms/terms.component';
import { PartnershipComponent } from './components/partnership/partnership.component';
import { AmbassadorComponent } from './components/ambassador/ambassador.component';
import { LoginComponent } from './components/login/login.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CookiesComponent } from './components/cookies/cookies.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent,
  },
  {
    path: "programs",
    component: WorkoutsComponent,
  },
  {
    path: "nutrition",
    component: NutritionComponent,
  },
  {
    
    path: "terms",
    component: TermsComponent,
  },
  {
    path: "ambassador",
    component: AmbassadorComponent,
  },
  /* {
    path: "login",
    component: LoginComponent,
  }, */
  {
    path: "partnership",
    component: PartnershipComponent,
  },
  {
    path: "faqs",
    component: FaqsComponent,
  },
  {
    path: "contacts",
    component: ContactsComponent,
  },
  {
    path: "cookies",
    component: CookiesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
