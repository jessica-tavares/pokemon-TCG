
import { listaPokemon } from './../../../core/services/pokemon';
import { Component, OnInit, Input, Injectable } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})

@Injectable({ providedIn: 'root' })

export class CardComponent implements OnInit {

  @Input() pokemon: any;

  constructor() { }

  ngOnInit(): void {
  }

  public enviaCarta(pokemons: any) {
    console.log(pokemons)
  }

}
