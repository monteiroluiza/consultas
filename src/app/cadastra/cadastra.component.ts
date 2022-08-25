import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-cadastra',
  templateUrl: './cadastra.component.html',
  styleUrls: ['./cadastra.component.scss']
})
export class CadastraComponent implements OnInit {
  novoNome: string;
  novoPreco: string;
  novaData: string;

  constructor(private cn: ConsultaService) { 
    this.novoNome = '';
    this.novoPreco = '';
    this.novaData = '';
  }

  ngOnInit(): void {
  }

  adicionarData(){
    this.cn.adicionarData(this.novaData);
  }
  adicionarNome(){
    this.cn.adicionarNome(this.novoNome);
  }
  adicionarPreco(){
    this.cn.adicionarPreco(this.novoPreco);
  }

}
