import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-exibe',
  templateUrl: './exibe.component.html',
  styleUrls: ['./exibe.component.scss']
})
export class ExibeComponent implements OnInit {
  nome: string[];
  preco: string[];
  data: string[];

  constructor(private cn: ConsultaService) {
    this.nome = [];
    this.preco = [];
    this.data = [];
   }

  ngOnInit(): void {
    this.nome = this.cn.obterNome();
    this.data = this.cn.obterData();
    this.preco = this.cn.obterPreco();
  }

  cancelar(){
    this.nome = [];
    this.data = [];
    this.preco = [];
  }

}
