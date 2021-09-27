import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharecterListComponent } from './charecter-list/charecter-list.component';
import { CharecterDetailsComponent } from './charecter-details/charecter-details.component';

const myComponents = [CharecterDetailsComponent, CharecterListComponent];

@NgModule({
  declarations: [...myComponents],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    [...myComponents]
  ]
})
export class CharactersModule { }
