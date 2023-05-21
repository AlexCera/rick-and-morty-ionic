import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'character',
    loadChildren: () => import('@pages/character/character.module').then(m => m.CharacterPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('@pages/location/location.module').then(m => m.locationPageModule)
  },
  {
    path: 'episode',
    loadChildren: () => import('@pages/episode/episode.module').then(m => m.EpisodePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
