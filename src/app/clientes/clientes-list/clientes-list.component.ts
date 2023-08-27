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

  constructor(
    private service: ClientesService, 
    private router: Router){}

  ngOnInit(): void {
  this.service
  .getAllClients()
  .subscribe(response => this.clientes = response);
  }

  public newRegister(){
    this.router.navigate(['/clientes-form'])
  }


}
