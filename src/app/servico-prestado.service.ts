import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';

import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiBaseURL + '/api/servicos-prestados';

  constructor(private http: HttpClient) { }

  createService(servicoPrestado: ServicoPrestado):Observable<ServicoPrestado>{

    return this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado)
  }
}
