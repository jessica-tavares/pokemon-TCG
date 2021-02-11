import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-choose-card',
  templateUrl: './choose-card.component.html',
  styleUrls: ['./choose-card.component.sass']
})

@Injectable({ providedIn: 'root' })

export class ChooseCardComponent implements OnInit {

  baralho: any;
  baralhos_collect: any;
  names: any[string];

  constructor() {
    
   }

  ngOnInit(): void {
    this.baralho = localStorage.getItem("baralhos");
    this.baralhos_collect = JSON.parse(this.baralho);
  }

  RemoveBaralho(nome: string) {
    const result = this.baralhos_collect.filter((item: { name: string; }) => item.name !== nome);
    this.baralhos_collect = result;
    localStorage.setItem('baralhos', JSON.stringify(result));
  }

}
