import { listaPokemon } from './../../core/services/pokemon';

import { CrudService } from './../../core/services/crud.service';
import { CardComponent } from './../../shared/components/card/card.component';
import { Component, Injectable, OnInit } from '@angular/core';

import { listaPokemon } from '../../core/services/pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

@Injectable({ providedIn: 'root' })

export class HomeComponent implements OnInit {

  abacaxi= {  
    data:[
      {
        id: "xy1-1",
        name: "Venusaur-EX",
        supertype: "Pokémon",
        types: [
          "Grass"
        ],
        images: {
          small: "https://images.pokemontcg.io/xy1/1.png",
          large: "https://images.pokemontcg.io/xy1/1_hires.png"
        },
      }
    ]
  };

  pokemons!: listaPokemon[];
  pokemons$!: Observable<listaPokemon[]>;

  constructor(cardComponent: CardComponent, private service: CrudService) { 
    console.log(this.pokemons$)
  }

  ngOnInit(): void {
    // this.service.list().subscribe(data => this.pokemons = data);
    this.pokemons$ = this.service.list();
  }
  

}
