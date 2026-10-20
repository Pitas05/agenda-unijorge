import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface EmpresaForm {
  nome: string;
  cnpj: string;
  logomarca: string;
  fundacao: string;
  descricao: string;
}

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empresa.html',
  styleUrls: ['./empresa.css']
})
export class EmpresaComponent {
  empresa: EmpresaForm = {
    nome: '',
    cnpj: '',
    logomarca: '',
    fundacao: '',
    descricao: ''
  };

  limpar(): void {
    this.empresa = {
      nome: '',
      cnpj: '',
      logomarca: '',
      fundacao: '',
      descricao: ''
    };
  }

  enviar(): void {
    console.log('Empresa enviada:', this.empresa);
  }
}
