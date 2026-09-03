import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadComponent: () => import('./home/home').then(m => (m as any).HomeComponent || Object.values(m)[0]) 
  },
  { 
    path: 'pessoas', 
    loadComponent: () => import('./pessoa/pessoa.component').then(m => (m as any).PessoaComponent || Object.values(m)[0]) 
  },
  { 
    path: '**', 
    loadComponent: () => import('./nao-encontrada/nao-encontrada').then(m => (m as any).NaoEncontradaComponent || Object.values(m)[0]) 
  }
];
