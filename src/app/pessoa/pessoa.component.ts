import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Rascunho, ErrosPessoa, Pessoa } from './pessoa.model';
import { validarFicha } from './pessoa.validacao';

@Component({
  selector: 'app-pessoa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pessoa.html',
  styleUrls: ['./pessoa.css']
})
export class FichaPessoaComponent {
  Object = Object;

  rascunho: Rascunho = {
    id: 0,
    nome: 'Marina Alves Ribeiro',
    email: '',
    vinculo: 'aluno',
    ativo: true,
    nacionalidade: 'Estrangeira',
    cpf: '111.111.111-11',
    rg: '',
    passaporte: '',
    senha: '123',
    confirmarSenha: '456'
  };

  tocados: Record<string, boolean> = {
    cpf: true,
    passaporte: true,
    confirmarSenha: true
  };

  listaPessoas: Pessoa[] = [
    { id: 1, nome: 'Ana Souza', email: 'ana@exemplo.com', vinculo: 'aluno', ativo: true, cpf: '111.111.111-11' },
    { id: 2, nome: 'Bruno Lima', email: 'bruno@exemplo.com', vinculo: 'professor', ativo: true, cpf: '222.222.222-22' }
  ];

  get erros(): ErrosPessoa {
    return validarFicha(this.rascunho, this.listaPessoas);
  }

  get temErros(): boolean {
    return Object.keys(this.erros).length > 0;
  }

  marcarTocado(campo: string): void {
    this.tocados[campo] = true;
  }

  salvar(): void {
    if (this.temErros) return;

    const novaPessoa: Pessoa = {
      ...this.rascunho,
      id: Date.now()
    };

    this.listaPessoas.push(novaPessoa);
  }
}
