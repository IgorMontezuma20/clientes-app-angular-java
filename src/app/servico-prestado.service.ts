import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';

import {environment} from '../environments/environment'
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-list/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiBaseURL + '/api/servicos-prestados';

  constructor(private http: HttpClient) { }

  createService(servicoPrestado: ServicoPrestado):Observable<ServicoPrestado>{

    return this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado)
  }

  searchService(nome: string, mes: number): Observable<ServicoPrestadoBusca[]>{

    const httpParams = new HttpParams()
    .set("nome", nome)
    .set("mes", mes ? mes.toString() : "");

    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }
}
