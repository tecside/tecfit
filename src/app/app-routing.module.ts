import { NutritionComponent } from './components/nutrition/nutrition.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { WorkoutsComponent } from "./components/workouts/workouts.component";
import { TermsComponent } from './components/terms/terms.component';

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
    path: "workouts",
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
