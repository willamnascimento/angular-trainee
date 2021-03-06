import { ProdutoService } from './../../shared/services/produto/produto.service';
import { IProduto } from './../../shared/entities/index';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  sortedData: IProduto[] = [];
  

  constructor(
    private produtoService: ProdutoService, 
    public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
    this.produtoService.getAll().subscribe((ret: IProduto[]) => {
      this.sortedData = ret;
    })
  }
  
}
