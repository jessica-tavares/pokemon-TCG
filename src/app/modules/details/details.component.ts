import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  baralhos_collection: any;
  deckId: number = 0;
  baralho: any;
  infos: any;

  constructor(
    private LSService: LocalStorageService,
    private route: ActivatedRoute) {
      this.deckId = this.route.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.baralhos_collection = this.LSService.get('baralhos');
    this.baralho = this.findDeck();
    console.log(this.baralho)
    this.infosBaralho();
}

  findDeck() {
    // return this.baralhos_collection.filter((item: { id: number }) => {
    //   ([this.deckId].indexOf(item.id) !== -1)
    // })
    for (let item in this.baralhos_collection) {
      if(this.baralhos_collection[item].id == this.deckId){
        return this.baralhos_collection[item];
      }
    }
  }

  infosBaralho() {
    const trainer: number = (this.baralho.cartas
      .filter((item: { supertype: string; }) => item.supertype === "Trainer" )).length;
    const pokemons: number = (this.baralho.cartas
      .filter((item: { supertype: string; }) => item.supertype === "Pokémon" )).length;
    const onlyType: number = (this.baralho.cartas
      .filter((item: { types: string | any[]; }) => item.types?.length == 1)).length;
    const colorsArray: any= [];
    this.baralho.cartas.map((item: { types: any; }) => {
      return colorsArray.push(item.types)
    });
    const colors = new Set(colorsArray.map(JSON.stringify))
    this.infos = {
      name: this.baralho.name,
      allPokemons: this.baralho.cartas.length,
      trainer,
      pokemons,
      onlyType,
      colors: colors.size,
    }
    console.log(this.infos)
  }

}
