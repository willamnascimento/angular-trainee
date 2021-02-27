import { ProdutoService } from './../../shared/services/produto/produto.service';
import { IProduto } from './../../shared/entities/index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  sortedData: IProduto[];
  

  constructor(private produtoService: ProdutoService) { 
    
  }

  ngOnInit(): void {
    this.produtoService.getAll().subscribe((ret: IProduto[]) => {
      this.sortedData = ret;
    })
  }

}
