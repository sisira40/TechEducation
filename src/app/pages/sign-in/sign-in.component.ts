import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {
  username : string ="";
  password : string ="";
  show: boolean= false;
  submit(){
  console.log("user name is " + this.username)
  this.clear();
  }
  clear(){
  this.username ="";
  this.password = "";
  this.show = true;
  }
  }
