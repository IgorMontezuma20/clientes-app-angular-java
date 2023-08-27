import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../Cliente';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];

  constructor(
    private service: ClientesService, 
    private router: Router){
    this.cliente = new Cliente();
  }

  ngOnInit(): void{

  }

  onSubmit(){
    this.service
    .saveClient(this.cliente)
    .subscribe(response =>{
      this.success = true;
      this.errors = []
      this.cliente = response
    }, errorResponse =>{
      this.success = false;
      this.errors = errorResponse.error.errors
    });
  }

  public goBackToList(){
    this.router.navigate(['/clientes-list'])
  }

}
