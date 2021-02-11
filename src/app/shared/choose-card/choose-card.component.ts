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
    this.baralhos_collect = localStorage.getItem("baralhos");
    this.names = console.log(localStorage.getItem("nomes"));
  }

  ngDoCheck() {
    console.log();
  }

}
