import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { WorkoutsComponent } from "./components/workouts/workouts.component";

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
