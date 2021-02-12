import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { CrudService } from './../../core/services/crud.service';
import { LocalStorageService } from './../../core/services/local-storage.service';
// import { listaPokemon } from '../../core/services/pokemon';



@Component({
  selector: 'app-deck-generate',
  templateUrl: './deck-generate.component.html',
  styleUrls: ['./deck-generate.component.sass']
})

@Injectable({ providedIn: 'root' })

export class DeckGenerateComponent implements OnInit {

  pokemons: any;
  pokemons$!: Observable<any>;
  nome_baralho: string = '';
  disable_button: boolean = true;
  can_add: boolean = true;
  baralhos: any = {};
  save_baralhos: any = [];

  constructor(
    private service: CrudService,
    private router: Router,
    private LSService: LocalStorageService) { 

  }

  ngOnInit(): void {
    // this.service.list().subscribe(data => this.pokemons = data.data);
    this.pokemons$ = this.service.list('', 40);
    this.pokemons = this.pokemons$;
  }

  ChangeName(form: any) {
    this.nome_baralho = form.value.nome;
    this.baralhos = {
      id: 0,
      name: this.nome_baralho,
      cartas: []
    };
    this.can_add = false;
  }
  
  cartaRecebida(event: any) {
    const rep = this.verificaCartasRepetidas(event);
    if(rep) return alert("Só é permitido adicionar 4 cartas iguais!")
    this.baralhos.cartas.push(event);
  }

  SalvarBaralho() {
    const storage = this.verificaLocalStorage();
    if(storage.length > 0) {
      const last = storage.length - 1;
      this.baralhos.id = storage[last].id + 1;
    }
    // Lógica para limitar min e max de cartas
    const tamanho = this.baralhos.cartas.length;
    if (tamanho < 4) {
      return alert("O baralho deve ter no mínimo 24 cartas!");
    }
    if (tamanho > 60) {
      return alert("O baralho deve ter no máximo 60 cartas");
    }
    if (storage.length > 0) {
      storage.push(this.baralhos);
      this.LSService.set("baralhos", storage);
    }else {
      this.save_baralhos.push(this.baralhos);
      this.LSService.set("baralhos", this.save_baralhos);
    }
    this.router.navigate(['/']);
  }

  verificaLocalStorage() {
    return this.LSService.get("baralhos");
  }

  verificaCartasRepetidas(evento: any) {
    const count = this.baralhos.cartas.reduce((acc: number, { name }: any) => {
      if(name == evento.name) return acc += 1;
      return acc;
    }, 1)
    if (count > 4) {
      return true;
    }
    return false;
  }

  searchName(event: string) {
    this.pokemons$ = this.service.list(event, 40);
    this.pokemons = this.pokemons$;
  }

  NewCards(newBaralho: any) {
    console.log(newBaralho)
    // this.baralhos = newBaralho;
  }

}
