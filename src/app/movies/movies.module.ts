import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MoviesListComponent } from './components/movies-list/movies-list.component'
import { RoutingModule } from './movies.routes'
import { MovieDetailsComponent } from './components/movie-details/movie-details.component'
import { PrimengModule } from '../primeng/primeng.module'
import { YouTubePlayerModule } from '@angular/youtube-player'
import { MovieTrailerComponent } from './components/movie-trailer/movie-trailer.component'

@NgModule({
  imports: [CommonModule, RoutingModule, PrimengModule, YouTubePlayerModule],
  declarations: [
    MoviesListComponent,
    MovieDetailsComponent,
    MovieTrailerComponent,
  ],
})
export class MoviesModule {}
