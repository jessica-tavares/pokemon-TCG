import { Component, OnInit, Injectable, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-choose-card',
  templateUrl: './choose-card.component.html',
  styleUrls: ['./choose-card.component.sass']
})

@Injectable({ providedIn: 'root' })

export class ChooseCardComponent implements OnInit {

  @Input() cards: any;
  @Output() currentCards = new EventEmitter;

  allCards: any;


  constructor() {
    
   }

  ngOnInit(): void {
    this.allCards = this.cards;
    console.log(this.allCards)
  }

  addCarta(carta: any) {
    this.allCards.cartas.push(carta);
    this.currentCards.emit(this.cards);
  }

  RemoveCarta(nome: string) {
    this.allCards = this.cards.cartas.filter((item: { name: string; }) => item.name !== nome);
    this.currentCards.emit(this.cards);
  }

}
