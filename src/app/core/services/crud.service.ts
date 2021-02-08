import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { listaPokemon } from './pokemon';

@Injectable()

export class CrudService {

  private readonly API = 'https://api.pokemontcg.io/v2/cards';

  constructor( private http: HttpClient) { }

  list() {
    return this.http.get<listaPokemon[]>(this.API);
  }
}
