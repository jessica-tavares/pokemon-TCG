import { EditComponent } from './modules/edit/edit.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeckGenerateComponent } from './modules/deck-generate/deck-generate.component';
import { HomeComponent } from './modules/home/home.component';
import { DetailsComponent } from './modules/details/details.component';


const appRoutes: Routes = [
  { path: 'deck', component: DeckGenerateComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
