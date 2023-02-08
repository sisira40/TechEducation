import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LearninglanguagesComponent } from './pages/learninglanguages/learninglanguages.component';
import { SearchComponent } from './pages/search/search.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { SignoutComponent } from './pages/signout/signout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearninglanguagesComponent,
    SearchComponent,
    SignInComponent,
    NewuserComponent,
    SignoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}



