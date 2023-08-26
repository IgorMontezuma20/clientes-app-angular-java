import { Injectable } from '@angular/core';
import { Cliente } from './clientes/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente(): Cliente{
    let cliente: Cliente = new Cliente();
    cliente.nome = "Igor Montezuma";
    cliente.cpf = "88888888888";
    return cliente;
  }
}
