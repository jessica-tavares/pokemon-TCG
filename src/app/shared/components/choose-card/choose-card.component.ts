import { Component, OnInit, Injectable } from '@angular/core';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-choose-card',
  templateUrl: './choose-card.component.html',
  styleUrls: ['./choose-card.component.sass']
})

@Injectable({ providedIn: 'root' })

export class ChooseCardComponent implements OnInit {

  baralhos_collect: any;
  names: any[string];

  constructor(private LSService: LocalStorageService) {
    
   }

  ngOnInit(): void {
    this.baralhos_collect = this.LSService.get("baralhos");
  }

  RemoveBaralho(nome: string) {
    this.baralhos_collect = this.baralhos_collect.filter((item: { name: string; }) => item.name !== nome);
    this.LSService.set('baralhos', this.baralhos_collect);
  }

}
