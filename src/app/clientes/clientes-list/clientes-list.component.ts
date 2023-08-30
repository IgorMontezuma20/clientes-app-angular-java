import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../Cliente';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Cliente[] = [];
  selectedClient: Cliente;
  successMessage: string;
  errorMessage: string;

  constructor(
    private service: ClientesService, 
    private router: Router){}

  ngOnInit(): void {
  this.service
  .getAllClients()
  .subscribe(response => this.clientes = response);
  }

  public newRegister(){
    this.router.navigate(['/clientes/form'])
  }

  modalForDeletion(cliente: Cliente){
    this.selectedClient = cliente;
  }

  deleteClient(){
    this.service
    .deleteClient(this.selectedClient)
    .subscribe(
      response => {this.successMessage = "Cliente removido com sucesso!",
      this.ngOnInit()},
      error => this.errorMessage = 'Ocorreu um erro ao remover este cliente.');
  }

}
