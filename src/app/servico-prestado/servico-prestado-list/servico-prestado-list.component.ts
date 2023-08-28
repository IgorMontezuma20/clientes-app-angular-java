import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoBusca } from './servicoPrestadoBusca';
import { ServicoPrestadoService } from '../../servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-list',
  templateUrl: './servico-prestado-list.component.html',
  styleUrls: ['./servico-prestado-list.component.css']
})
export class ServicoPrestadoListComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[];
  lista: ServicoPrestadoBusca[];

  constructor(private service: ServicoPrestadoService){
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12]
  }

  ngOnInit(){
   
  }

  search(){
    this.service
    .searchService(this.nome, this.mes)
    .subscribe(response => this.lista = response);
  }

}
