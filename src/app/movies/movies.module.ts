import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MoviesListComponent } from './components/movies-list/movies-list.component'
import { MoviesRoutingModule } from './movies-routing.module'
import { MovieDetailsComponent } from './components/movie-details/movie-details.component'
import { PrimengModule } from '../primeng/primeng.module'

@NgModule({
  imports: [CommonModule, MoviesRoutingModule, PrimengModule],
  declarations: [MoviesListComponent, MovieDetailsComponent],
})
export class MoviesModule {}
