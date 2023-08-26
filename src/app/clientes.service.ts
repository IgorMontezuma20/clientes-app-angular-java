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
  
  /*
  getClients() : Observable<Cliente[]>{
    return null as any;
  }
  */

  getClientes(): Cliente[]{
    let cliente = new Cliente();
    cliente.id = 1
    cliente.nome = 'Igor Montezuma de Miranda'
    cliente.cpf = '12345678900'
    cliente.dataCadastro = '26/08/2023'
    return [cliente]
  }
}
