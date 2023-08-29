import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string;
  password: string;
  loginError: boolean;
  registering: boolean;

  constructor(
    private router:Router
  ){}

  onSubmit(){
    this.router.navigate(['/home'])
  }

  setRegistration(event: any){
    event.preventDefault();
    this.registering = true;
  }

  cancelRegistration(){
    this.registering = false;
  }
}
