import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LearninglanguagesComponent } from './pages/learninglanguages/learninglanguages.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { SearchComponent } from './pages/search/search.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignoutComponent } from './pages/signout/signout.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'Learninglanguges',component:LearninglanguagesComponent},
   {path:'search',component:SearchComponent},
   {path:'signin',component:SignInComponent},
   {path:'newuser',component:NewuserComponent},
   {path:'signout',component:SignoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
