import { Component, Injectable, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

@Injectable({ providedIn: 'root' })

export class HomeComponent implements OnInit {

  allDecks: any;
  baseDecks: any;

  constructor(private LSService: LocalStorageService) { 

  }
  ngOnInit(): void {
    this.allDecks = this.LSService.get("baralhos");
    this.baseDecks = this.allDecks;
  }

  searchDeckName(event: string) {
    this.allDecks = this.baseDecks.filter((deck: { name: string | string[]; }) => deck.name.includes(event))
  }

}
