import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/Cliente';
import { ClientesService } from 'src/app/clientes.service';
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from '../../servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = []
  servico: ServicoPrestado;

  constructor(
    private clientesService: ClientesService,
    private service: ServicoPrestadoService
  ){
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clientesService
    .getAllClients()
    .subscribe(response => this.clientes = response)
  }

  onSubmit(){
    this.service
    .createService(this.servico)
    .subscribe(response => {
      console.log(response);
    })
  }

}
