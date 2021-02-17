import { Component, Injectable, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { CrudService } from './../../core/services/crud.service';
import { LocalStorageService } from './../../core/services/local-storage.service';
// import { listaPokemon } from '../../core/services/pokemon';



@Component({
  selector: 'app-deck-generate',
  templateUrl: './deck-generate.component.html',
  styleUrls: ['./deck-generate.component.sass']
})

@Injectable({ providedIn: 'root' })

export class DeckGenerateComponent implements OnInit {

  pokemons: any;
  pokemons$!: Observable<any>;
  showSpinner:boolean = true;
  @Input() nome_baralho: string = '';
  disable_button: boolean = true;
  @Input() can_add: boolean = true;
  @Input() @Output() baralhos: any = {};
  save_baralhos: any = [];
  exist: boolean = false;

  constructor(
    private service: CrudService,
    private router: Router,
    private LSService: LocalStorageService) { 
  }

  ngOnInit(): void {
    // this.service.list().subscribe(data => this.pokemons = data.data);
    this.pokemons$ = this.service.list('', 40);
    this.pokemons = this.pokemons$;
    this.showSpinner = false;
  }

  ChangeName(form: any) {
    this.nome_baralho = form.value.nome;
    this.baralhos = {
      id: this.baralhos.id,
      name: this.nome_baralho,
      cartas: this.baralhos.cartas || []
    };
    this.can_add = false;
  }
  
  cartaRecebida(event: any) {
    const rep = this.verificaCartasRepetidas(event);
    if(rep) return alert("Só é permitido adicionar 4 cartas iguais!")
    this.baralhos.cartas.push(event);
  }

  SalvarBaralho() {
    const storage = this.verificaLocalStorage();
    // cria o id do baralho caso não seja edição e ja exsta baralhos
    if(storage.length > 0 && !this.exist) {
      const last = storage.length - 1;
      this.baralhos.id = storage[last].id + 1;
    }
    // Lógica para limitar min e max de cartas
    const tamanho = this.baralhos.cartas.length;
    if (tamanho < 4) {
      return alert("O baralho deve ter no mínimo 24 cartas!");
    }
    if (tamanho > 60) {
      return alert("O baralho deve ter no máximo 60 cartas");
    }
    // lógica para salvar as cartas
    if (storage.length > 0) {
      storage.push(this.baralhos);
      this.LSService.set("baralhos", storage);
    } else {
      this.baralhos.id = 0;
      this.save_baralhos.push(this.baralhos);
      this.LSService.set("baralhos", this.save_baralhos);
    }
    this.router.navigate(['/']);
  }

  verificaLocalStorage() {
    let storage = this.LSService.get("baralhos");
    const edition = storage.find((item: { id: any; }) => item.id == this.baralhos.id);
    if(edition) {
      storage = storage.filter((item: { id: any; }) => item.id != edition.id);
      this.exist = true;
    }
    return storage;
  }

  verificaCartasRepetidas(evento: any) {
    const count = this.baralhos.cartas.reduce((acc: number, { name }: any) => {
      if(name == evento.name) return acc += 1;
      return acc;
    }, 1)
    if (count > 4) {
      return true;
    }
    return false;
  }

  searchName(event: string) {
    this.pokemons$ = this.service.list(event, 40);
    this.pokemons = this.pokemons$;
    this.showSpinner = false;
  }

  NewCards(newBaralho: any) {
    this.baralhos = newBaralho;
  }

}
