import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

import { CrudService } from './../../core/services/crud.service';
import { CardComponent } from './../../shared/components/card/card.component';
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
  nome_baralho: string = "Nome do baralho";
  can_add: boolean = true;
  baralhos: any = {};
  save_baralhos: any = [];

  constructor(
    private service: CrudService,
    private router: Router) { 

  }

  ngOnInit(): void {
    // this.service.list().subscribe(data => this.pokemons = data.data);
    this.pokemons$ = this.service.list();
    this.pokemons = this.pokemons$;
  }

  ChangeName(form: any) {
    this.nome_baralho = form.value.nome;
    this.baralhos = {
      name: this.nome_baralho,
      cartas: []
    };
    this.can_add = false;
  }
  
  cartaRecebida(event: any) {
    this.baralhos.cartas.push(event);
  }

  SalvarBaralho() {
    const storage = this.verificaLocalStorage();
    let index: number = 0;
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
      console.log(storage)
      localStorage.setItem("baralhos", JSON.stringify(storage));
    }else {
      this.save_baralhos.push(this.baralhos);
      localStorage.setItem("baralhos", JSON.stringify(this.save_baralhos));
    }
    this.router.navigate(['/']);
  }

  verificaLocalStorage() {
    const storage = localStorage.getItem("baralhos");
    if (storage) {
      return JSON.parse(storage);
    }
    return [];
  }

  verificaCartasRepetidas() {
    
  }

}
