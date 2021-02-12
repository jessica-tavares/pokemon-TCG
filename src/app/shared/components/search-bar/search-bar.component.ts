import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {

  @Input() deckName: string = '';

  @Output() search = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public enviaPesquisa(form: any) {
    this.search.emit(form.value.search);
  }

}
