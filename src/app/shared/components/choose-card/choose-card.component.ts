import { Component, OnInit, Injectable, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-choose-card',
  templateUrl: './choose-card.component.html',
  styleUrls: ['./choose-card.component.sass']
})

@Injectable({ providedIn: 'root' })

export class ChooseCardComponent implements OnInit {

  @Input('cards') allCards: any;
  @Output() currentCards = new EventEmitter;
  @Output() addCards = new EventEmitter;

  c: any;


  constructor() {
    
   }

  ngOnInit(): void {
  }

  addCarta(carta: any) {
    this.addCards.emit(carta);
  }

  RemoveCarta(index: number) {
    this.allCards.cartas.splice(index, 1);
    this.currentCards.emit(this.allCards);
  }

}
