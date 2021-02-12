import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StylesModule } from './core/layout/styles.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { DeckGenerateComponent } from './modules/deck-generate/deck-generate.component';
import { CardComponent } from './shared/components/card/card.component'
import { ChooseCardComponent } from './shared/components/choose-card/choose-card.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DetailsComponent } from './modules/details/details.component';
import { DecksComponent } from './shared/components/decks/decks.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ChooseCardComponent,
    DeckGenerateComponent,
    HeaderComponent,
    DetailsComponent,
    DecksComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StylesModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
