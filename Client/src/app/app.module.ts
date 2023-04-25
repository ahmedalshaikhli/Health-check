import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './user-profile/login/login.component';
import { RegisterComponent } from './user-profile/register/register.component';
import { RiskProfileComponent } from './risk-profile/risk-profile.component';
import { HomeAreaCodeComponent } from './home/home-area-code/home-area-code.component';
import { WorkAreaCodeComponent } from './home/work-area-code/work-area-code.component';
import { HomeAreaDetailsComponent } from './home/home-area-code/home-area-details/home-area-details.component';
import { WorkAreaDetailsComponent } from './home/work-area-code/work-area-details/work-area-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    RiskProfileComponent,
    HomeAreaCodeComponent,
    WorkAreaCodeComponent,
    HomeAreaDetailsComponent,
    WorkAreaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
