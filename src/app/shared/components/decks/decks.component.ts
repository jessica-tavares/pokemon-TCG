import { Component, OnInit, Injectable, Input } from '@angular/core';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.sass']
})

@Injectable({ providedIn: 'root' })

export class DecksComponent implements OnInit {

  @Input() baralhos_collect: any;

  constructor(private LSService: LocalStorageService) {
    
   }

  ngOnInit(): void {

  }

  RemoveBaralho(id: number) {
    this.baralhos_collect = this.baralhos_collect.filter((item: { id: number; }) => item.id !== id);
    this.LSService.set('baralhos', this.baralhos_collect);
  }

}
