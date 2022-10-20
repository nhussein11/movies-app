import { createFeatureSelector } from '@ngrx/store'
import { Movie } from 'src/app/movies/models/movie.model'

export const selectMovies =
  createFeatureSelector<ReadonlyArray<Movie>>('movies')
