import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { listaPokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  private readonly API = 'https://api.pokemontcg.io/v1/cards';
  page: number = 1;

  constructor(private http: HttpClient) { }

  list(search: string, pageSize: number): Observable<any> {
    return this.http.get(`${this.API}?page=${this.page}&name=${search}&pageSize=${pageSize}`);
  }
}
