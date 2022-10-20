import { createFeatureSelector } from '@ngrx/store'
import { Movie } from 'src/app/shared/models/api.model'

export const selectMovies =
  createFeatureSelector<ReadonlyArray<Movie>>('movies')
