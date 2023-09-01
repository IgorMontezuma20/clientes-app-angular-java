import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './login/user';
import { Observable } from 'rxjs';

import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiBaseURL + "/api/usuarios"

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user: User) : Observable<any>{
    return this.http.post<any>(this.apiURL, user);
  }

}
