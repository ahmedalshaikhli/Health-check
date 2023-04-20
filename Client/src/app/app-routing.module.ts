import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayDetailsComponent } from './home/display-details/display-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'displayResult', component: DisplayDetailsComponent }, // Child component route with result as a parameter
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
