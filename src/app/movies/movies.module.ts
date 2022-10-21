import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MoviesListComponent } from './components/movies-list/movies-list.component'
import { MoviesRoutingModule } from './movies-routing.module'
import { MovieDetailsComponent } from './components/movie-details/movie-details.component'

@NgModule({
  imports: [CommonModule, MoviesRoutingModule],
  declarations: [MoviesListComponent, MovieDetailsComponent],
})
export class MoviesModule {}
