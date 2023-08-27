import { Injectable } from '@angular/core';
import { Cliente } from './clientes/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {}

  saveClient(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente)
  }
  
  
  getAllClients() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }
  

}
