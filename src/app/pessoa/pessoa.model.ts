export type Vinculo = 'aluno' | 'professor' | 'convidado';

export interface Pessoa {
  id: number;
  nome: string;
  curso?: string;
  email: string;
  telefone?: string;
  vinculo: Vinculo;
  ativo: boolean;
  cpf: string;
}

export interface Endereco {
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export interface PessoaCompleta extends Pessoa {
  celular?: string;
  nacionalidade: string;
  passaporte?: string;
  rg?: string;
  matricula?: string;
  semestre?: number;
  dataNascimento?: string;
  ingresso?: string;
  senha?: string;
  emailAlternativo?: string;
  endereco?: Endereco;
}

export type Rascunho = PessoaCompleta & { 
  confirmarSenha?: string; 
};

export type CampoDoFormulario = keyof Rascunho;

export type ErrosPessoa = Partial<Record<CampoDoFormulario, string>>;

