import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharecterListComponent } from './charecter-list.component';

const routes: Routes = [{ path: '', component: CharecterListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharecterListRoutingModule { }
