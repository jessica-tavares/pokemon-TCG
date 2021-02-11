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
  cartas_baralho: any[] = [];
  baralhos: any = []
  nomes: any[string] = [];

  constructor(cardComponent: CardComponent,
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
    this.nomes.push(form.value.nome);
    this.baralhos.push({
      name: this.nome_baralho,
      cartas: []
    });
    this.can_add = false;
  }
  
  cartaRecebida(event: any) {
    const index = this.nomes.indexOf(this.nome_baralho);
    this.baralhos[index].cartas.push(event);
  }

  SalvarBaralho() {
    const index = this.nomes.indexOf(this.nome_baralho);
    const tamanho = this.baralhos[index].cartas.length;
    if (tamanho < 24) {
      return alert("O baralho deve ter no mínimo 24 cartas!");
    }
    if (tamanho > 60) {
      return alert("O baralho deve ter no máximo 60 cartas");
    }
    else {
      localStorage.setItem("baralhos", JSON.stringify(this.baralhos));
      this.router.navigate(['/']);
    }
  }

}
