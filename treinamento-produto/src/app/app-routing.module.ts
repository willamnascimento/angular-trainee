import { ProdutoNovoComponent } from './pages/produto-novo/produto-novo.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoEditarComponent } from './pages/produto-editar/produto-editar.component';

const routes: Routes = [
  {
    path: 'produto',
    component: ProdutoComponent,
    data: {title: 'Lista de Produtos'}
  },
  {
    path: 'produto-novo',
    component: ProdutoNovoComponent,
    data: {title: 'Novo Produto'}
  },
  {
    path: 'produto-editar/:id',
    component: ProdutoEditarComponent,
    data: { title: 'Editar Produto'}
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
