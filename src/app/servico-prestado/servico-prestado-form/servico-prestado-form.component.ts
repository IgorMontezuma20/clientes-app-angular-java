import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/Cliente';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = []

  constructor(
    private clientesService: ClientesService
  ){}

  ngOnInit(): void {
    this.clientesService
    .getAllClients()
    .subscribe(response => this.clientes = response)
  }

  onSubmit(){
    console.log("Submit")
  }

}
