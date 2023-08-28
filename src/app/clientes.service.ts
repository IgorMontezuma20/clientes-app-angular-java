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
    return this.http.post<Cliente>(`${this.apiURL}`, cliente)
  }
  
  
  getAllClients() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apiURL}`);
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
