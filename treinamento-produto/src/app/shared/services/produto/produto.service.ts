import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduto } from '../../entities';

const PRODUTO_ENDPOINT = "/produtos";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) 
  { 

  }

  getAll(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(`http://localhost:3000${PRODUTO_ENDPOINT}`)
    .pipe(map((resp: IProduto[]) => {
      return resp;
    }));
  }
}
