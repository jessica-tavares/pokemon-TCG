import { Component, OnInit, Input, Injectable, Output, EventEmitter } from '@angular/core';
// import { listaPokemon } from './../../../core/services/pokemon';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})

@Injectable({ providedIn: 'root' })

export class CardComponent implements OnInit {

  @Input() pokemon: any;
  @Input() disable: boolean = true;

  @Output() carta = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public enviaCarta(pokemons: any) {
    this.carta.emit(pokemons);
  }

}
