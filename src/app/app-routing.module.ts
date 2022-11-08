import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies.module').then(m => m.MoviesModule),
  },
  {
    path: 'series',
    loadChildren: () =>
      import('./series/series.module').then(m => m.SeriesModule),
  },
  {
    path: 'actors',
    loadChildren: () =>
      import('./actors/actors.module').then(m => m.ActorsModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
