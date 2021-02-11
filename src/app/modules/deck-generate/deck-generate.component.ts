import { CrudService } from './../../core/services/crud.service';
import { CardComponent } from './../../shared/components/card/card.component';
import { Component, Injectable, OnInit } from '@angular/core';

// import { listaPokemon } from '../../core/services/pokemon';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-deck-generate',
  templateUrl: './deck-generate.component.html',
  styleUrls: ['./deck-generate.component.sass']
})

@Injectable({ providedIn: 'root' })

export class DeckGenerateComponent implements OnInit {

  pokemons: any;
  pokemons$!: Observable<any>;
  nome_baralho: string = "Baralho";
  can_add: boolean = true;
  cartas_baralho: any[] = [];
  baralhos: any = {}
  nomes: any[string] = [];

  constructor(cardComponent: CardComponent, private service: CrudService) { 

  }

  ngOnInit(): void {
    // this.service.list().subscribe(data => this.pokemons = data.data);
    this.pokemons$ = this.service.list();
    this.pokemons = this.pokemons$;
  }

  ChangeName(form: any) {
    this.nome_baralho = form.value.nome;
    this.nomes.push(form.value.nome);
    const index = this.nomes.indexOf(this.nome_baralho);
    this.baralhos[index] = []
    this.can_add = false;
  }
  
  cartaRecebida(event: any) {
    this.cartas_baralho.push(event);
    const index = this.nomes.indexOf(this.nome_baralho);
    this.baralhos[index].push(this.cartas_baralho);
  }

  SalvarBaralho() {
    localStorage.setItem("baralhos", JSON.stringify(this.baralhos));
    localStorage.setItem("nomes", JSON.stringify(this.nomes));
  }

}
