import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pessoa } from './pessoa.model';
import { validarPessoa, validarIdsUnicos } from './pessoa.validacao';

@Component({
  selector: 'app-pessoa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css'
})
export class PessoaComponent {
  pessoas: Pessoa[] = [
    { id: 1, nome: 'Ana Silva', email: 'ana@email.com', curso: 'Ciência da Computação', telefone: '71999998888' },
    { id: 2, nome: 'Bruno Costa', email: 'bruno@email.com', curso: 'Sistemas de Informação' },
    { id: 3, nome: 'Carla Souza', email: 'carla@email.com', curso: 'Engenharia de Computação' },
    { id: 4, nome: 'Diego Lima', email: 'diego@email.com', curso: 'Ciência da Computação' },
    { id: 4, nome: 'João123', email: 'joao-sem-arroba', curso: 'Medicina', telefone: '123' }
  ];

  errosDeId: string[] = validarIdsUnicos(this.pessoas);

  resultados = this.pessoas.map(pessoa => ({
    pessoa,
    erros: validarPessoa(pessoa)
  }));
}