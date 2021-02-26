import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  sortedData: any;

  constructor() { 
    this.sortedData = [{
      Id: 1,
      Nome: "Produto 1"
    },{
      Id: 2,
      Nome: "Produto 2"
    }];
  }

  ngOnInit(): void {
  }

}
