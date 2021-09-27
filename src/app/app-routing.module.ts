import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, { path: 'character-list', loadChildren: () => import('./components/pages/characters/charecter-list/charecter-list.module').then(m => m.CharecterListModule) }, { path: 'character-details/:id', loadChildren: () => import('./components/pages/characters/charecter-details/charecter-details.module').then(m => m.CharecterDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
