import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';
import { DecksComponent } from 'src/app/shared/components/decks/decks.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchBarComponent,
    DecksComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [HomeComponent],
  providers: [],
})
export class HomeModule { }
