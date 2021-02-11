import { Component, Input, OnInit, Injectable } from '@angular/core';

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

  ngDoCheck() {
  }

}
