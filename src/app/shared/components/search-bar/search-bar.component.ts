import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {

  private subjectKeyUp = new Subject<any>();

  @Input() deckName: string = '';

  @Output() search = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.subjectKeyUp.pipe(debounceTime(1000)).subscribe(d => 
      this.search.emit(d))
  }

  public enviaPesquisa(event: any) {
    this.subjectKeyUp.next(event.target.value);
  }

}
