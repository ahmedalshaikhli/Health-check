import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RiskProfileComponent } from './risk-profile/risk-profile.component';
import { HomeAreaDetailsComponent } from './home/home-area-code/home-area-details/home-area-details.component';
import { WorkAreaDetailsComponent } from './home/work-area-code/work-area-details/work-area-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeAreaCodeComponent } from './home/home-area-code/home-area-code.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'riskProfile', component: RiskProfileComponent },
  { path: 'userProfile', component: UserProfileComponent },
/*   { path: 'home', component: HomeComponent }, */
  { path: 'home/homeDetails', component: HomeAreaDetailsComponent },
  { path: 'home/workDetails', component: WorkAreaDetailsComponent },
  { path: 'home/homeAreCode', component: HomeAreaCodeComponent },
  

  
   // Child component route with result as a parameter

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
