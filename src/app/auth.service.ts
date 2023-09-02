import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './login/user';
import { Observable } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';

import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiBaseURL + "/api/usuarios";
  tokenUrl: string = environment.apiBaseURL + environment.getTokenUrl;
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient
  ) { }

  getToken() {
    const tokenString = localStorage.getItem('access_token');
    if(tokenString){
      const token = JSON.parse(tokenString).access_token;
      return token;
    }

    return null;
  }

  finishSession(){
    localStorage.removeItem('access_token');
  }

  getAutheticatedUser() {
    const token = this.getToken();
    if(token){
      const user = this.jwtHelper.decodeToken(token).user_name;
      return user;
    }

    return null;
  }

  isAuthenticated(): boolean {
    const token =  this.getToken();
    if (token) {
      const isExpired = this.jwtHelper.isTokenExpired(token);
      return !isExpired;
    }
    return false;
  }

  registerUser(user: User) : Observable<any>{
    return this.http.post<any>(this.apiURL, user);
  }


  tryToLogin(username: string, password:string) : Observable<any>{
    const params = new HttpParams()
          .set('username', username)
          .set('password', password)
          .set('grant_type', 'password')

    const headers = {
      "Authorization": "Basic " + btoa(`${this.clientId}:${this.clientSecret}`),
      "Content-Type": "application/x-www-form-urlencoded"
    }
    return this.http.post<any>(this.tokenUrl, params.toString(), { headers })
  }
}
