import { IProduto } from './../../shared/entities/index';
import { ProdutoService } from './../../shared/services/produto/produto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.scss']
})
export class ProdutoNovoComponent {
  formulario: FormGroup;
  
  constructor(private fb: FormBuilder, private produtoService: ProdutoService, private router: Router) { 
    this.formulario = this.fb.group({
      Nome: ['', [Validators.required, Validators.minLength(5)]],
      Valor: ['',[Validators.required]],
      Ativo: ['']
    });
    
  }

  salvar(): void {
    this.produtoService.save(this.formulario.value).subscribe((res: IProduto) => {
      this.router.navigateByUrl('/produto');
    });
  }

}
