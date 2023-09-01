import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './login/user';
import { Observable } from 'rxjs';

import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiBaseURL + "/api/usuarios"
  tokenUrl: string = environment.apiBaseURL + environment.getTokenUrl
  clientId: string = environment.clientId
  clientSecret: string = environment.clientSecret

  constructor(
    private http: HttpClient
  ) { }

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
