import { Injectable } from '@angular/core';
import { Cliente } from './clientes/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiBaseURL + '/api/clientes';

  constructor(private http: HttpClient) {}

  saveClient(cliente: Cliente):Observable<Cliente>{
    const token = JSON.parse(localStorage.getItem('access_token') || '{}')
    const headers = {
      "Authorization":"Bearer " + token.access_token
    }
    return this.http.post<Cliente>(`${this.apiURL}`, cliente, { headers })
  }
  
  
  getAllClients() : Observable<Cliente[]>{
    const token = JSON.parse(localStorage.getItem('access_token') || '{}')
    const headers = {
      "Authorization":"Bearer " + token.access_token
    }
    return this.http.get<Cliente[]>(`${this.apiURL}`, { headers });
  }

  getClientById(id: number) : Observable<Cliente>{
    return this.http.get<any>(`${this.apiURL}/${id}`)
  }

  updateClient(cliente: Cliente):Observable<any>{
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente)
  }

  deleteClient(cliente: Cliente):Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`)
  }
  

}
