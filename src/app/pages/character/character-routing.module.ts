import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterPage } from '@pages/character/character.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterPage
  },
  {
    path: 'detail/:characterId',
    loadChildren: () => import('@pages/character/detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterPageRoutingModule {}
