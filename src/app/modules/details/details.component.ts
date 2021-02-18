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
    this.baralho = this.LSService.getDeck('baralhos', this.deckId);
    this.infosBaralho();
}

  infosBaralho() {
    const trainer: any[] = (this.baralho.cartas
      .filter((item: { supertype: string; }) => item.supertype === "Trainer" ));
    const trainerSize: number = trainer.length;
  
    const pokemons: any[] = this.baralho.cartas
      .filter((item: { supertype: string; }) => item.supertype === "Pokémon" );
    const pokemonsSize: number = pokemons.length;
  
    const energy: any[] = (this.baralho.cartas
      .filter((item: { supertype: string; }) => item.supertype === "Energy" ));
    const energySize: number = energy.length;
  
    const onlyType: number = (this.baralho.cartas
      .filter((item: { types: string | any[]; }) => item.types?.length == 1)).length;
    const colorsArray: any= [];
    pokemons.map((item: { types: any; }) => {
      return colorsArray.push(item.types)
    });
    const colors = new Set(colorsArray.map(JSON.stringify))
    this.infos = {
      name: this.baralho.name,
      allPokemons: this.baralho.cartas.length,
      pokemons,
      trainer,
      energy,
      trainerSize,
      pokemonsSize,
      energySize,
      onlyType,
      colors: colors.size,
    }
  }

}
