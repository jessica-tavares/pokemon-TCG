import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeckGenerateModule } from './../deck-generate/deck-generate.module';
import { DeckGenerateComponent } from './../deck-generate/deck-generate.component';
import { EditComponent } from './edit.component';


@NgModule({
  declarations: [
    EditComponent,
  ],
  imports: [
    CommonModule,
    DeckGenerateModule
  ],
  exports: [EditComponent]
})
export class EditModule { }
