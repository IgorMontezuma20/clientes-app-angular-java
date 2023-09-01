import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string;
  password: string;
  registering: boolean;
  successMessage: string;
  errors: string[];

  constructor(
    private router: Router,
    private authService: AuthService
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

  register(){
    const user: User = new User();
    user.username = this.userName;
    user.password = this.password;
    this.authService
    .registerUser(user)
    .subscribe(response => {
      this.successMessage = "Cadastro realizado com sucesso! Efetue o login."
      this.registering = false;
      this.userName = ""
      this.password = ""
      this.errors = []
    }, errorResponse => {
      this.successMessage = "";
      this.errors = errorResponse.error.errors;
    })
  }
}
