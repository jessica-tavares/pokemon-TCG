import { DetailsComponent } from './details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [DetailsComponent]
})
export class DetailsModule { }
