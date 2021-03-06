import { IProduto } from './../../entities/index';
import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  getById(Id: number): Observable<IProduto> {
    
    return this.http.get<IProduto>(`http://localhost:3000${PRODUTO_ENDPOINT}?Id=${Id}`)
    .pipe(map((resp: IProduto) => {
      return resp;
    }));
  }

  save(produto: IProduto): Observable<IProduto> {
    return this.http.post<IProduto>(`http://localhost:3000${PRODUTO_ENDPOINT}`,produto)
    .pipe(map((resp: IProduto) => {
      return resp;
    }));
  }

  edit(produto: IProduto): Observable<IProduto> {
    return this.http.put<IProduto>(`http://localhost:3000${PRODUTO_ENDPOINT}/${produto.Id}`,produto)
    .pipe(map((resp: IProduto) => {
      return resp;
    }));
  }


}
