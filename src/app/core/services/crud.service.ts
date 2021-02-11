import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators'

import { listaPokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  private readonly API = 'https://api.pokemontcg.io/v2/cards';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(this.API);
  }
}
