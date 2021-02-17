import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  deckId: number = 0;
  deck: any;
  can_add: boolean = false;

  constructor(private route: ActivatedRoute, private LSService: LocalStorageService) {
    this.deckId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.deck = this.LSService.getDeck('baralhos', this.deckId);
  }

}
