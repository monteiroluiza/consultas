import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConsultaService {
  private nome: string[];
  private preco: string[];
  private data: string[];

  constructor() { 
    this.nome = [];
    this.preco = [];
    this.data = [];
  }

  adicionarNome(nome: string): boolean {
    if (nome != undefined && nome != ''){
      this.nome.push(nome);
      return true;
    }
    return false;
  }

  obterNome(): string[]{
    return this.nome;
  }

  adicionarPreco(preco: string): boolean {
    if (preco != undefined && preco != ''){
      this.preco.push(preco);
      return true;
    }
    return false;
  }

  obterPreco(): string[]{
    return this.preco;
  }

  adicionarData(data: string): boolean {
    if (data != undefined && data != ''){
      this.data.push(data);
      return true;
    }
    return false;
  }

  obterData(): string[]{
    return this.data;
  }

}
