import { CrudService } from './../../core/services/crud.service';
import { CardComponent } from './../../shared/components/card/card.component';
import { Component, Injectable, OnInit } from '@angular/core';

// import { listaPokemon } from '../../core/services/pokemon';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

@Injectable({ providedIn: 'root' })

export class HomeComponent implements OnInit {

  pokemons: any;
  pokemons$!: Observable<any>;
  value: string = 'Nome do Baralho';
  nome_baralho: string = "Baralho";
  can_add: boolean = true;
  cartas_baralho: any[] = [];
  baralho: any = {}

  constructor(cardComponent: CardComponent, private service: CrudService) { 

  }

  ngOnInit(): void {
    // this.service.list().subscribe(data => this.pokemons = data.data);
    this.pokemons$ = this.service.list();
    this.pokemons = this.pokemons$;
  }

  ChangeName(form: any) {
    this.nome_baralho = form.value.nome;
    this.can_add = false;
  }
  
  cartaRecebida(event: any) {
    this.cartas_baralho.push(event);
    this.baralho[this.nome_baralho] = this.cartas_baralho;
  }

}
