import { Rascunho, ErrosPessoa, Pessoa } from './pessoa.model';

export function validarFicha(rascunho: Rascunho, pessoasExistentes: Pessoa[] = []): ErrosPessoa {
  const erros: ErrosPessoa = {};

  if (rascunho.cpf) {
    const cpfRepetido = pessoasExistentes.some(p => p.cpf === rascunho.cpf);
    if (cpfRepetido) {
      erros.cpf = 'CPF inválido.';
    }
  }

  if (rascunho.nacionalidade === 'Estrangeira' && (!rascunho.passaporte || rascunho.passaporte.trim() === '')) {
    erros.passaporte = 'Estrangeiro precisa informar o passaporte.';
  }

  if (rascunho.senha || rascunho.confirmarSenha) {
    if (rascunho.senha !== rascunho.confirmarSenha) {
      erros.confirmarSenha = 'As senhas não conferem.';
    }
  }

  return erros;
}
