import { CrudService } from './../../core/services/crud.service';
import { DeckGenerateComponent } from './deck-generate.component';
import { ChooseCardComponent } from './../../shared/components/choose-card/choose-card.component';
import { CardComponent } from './../../shared/components/card/card.component';
import { SearchBarComponent } from './../../shared/components/search-bar/search-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    DeckGenerateComponent,
    SearchBarComponent,
    CardComponent,
    ChooseCardComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [DeckGenerateComponent],
})
export class DeckGenerateModule { }
