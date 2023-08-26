import { Injectable } from '@angular/core';
import { Cliente } from './clientes/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {

  }

  saveClient(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente)
  }
  //getCliente(): Cliente{
  //  let cliente: Cliente = new Cliente();
  //  cliente.nome = "Igor Montezuma";
 //   cliente.cpf = "88888888888";
  //  return cliente;
  //}
}