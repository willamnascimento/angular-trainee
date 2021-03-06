import { IProduto } from './../../shared/entities/index';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/shared/services/produto/produto.service';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.scss']
})
export class ProdutoEditarComponent implements OnInit{

  formulario: FormGroup;
  produto: IProduto;
  
  constructor(private fb: FormBuilder, 
              private produtoService: ProdutoService, 
              private router: Router,
              private route: ActivatedRoute) { 
    
                this.formulario = this.fb.group({
                  Id: [''],
                  Nome: [''],
                  Valor: [''],
                  Ativo: ['']
                });
  }

  async ngOnInit(): Promise<void> {
    
    const id = this.route.snapshot.paramMap.get('id');
    const ret: any = await this.produtoService.getById(Number(id)).toPromise();
    this.produto = ret[0];
    this.formulario = this.fb.group({
      Id: [this.produto.Id],
      Nome: [this.produto.Nome || '', [Validators.required, Validators.minLength(5)]],
      Valor: [this.produto.Valor || '',[Validators.required]],
      Ativo: [this.produto.Ativo]
    });
    console.log(this.formulario);
  }

  editar(): void {
    this.produtoService.edit(this.formulario.value).subscribe((res: IProduto) => {
      this.router.navigateByUrl('/produto');
    });
  }

}
