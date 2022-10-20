import { createFeatureSelector, createSelector } from '@ngrx/store'
import { Movie } from 'src/app/shared/models/api.model'

export const selectMovies =
  createFeatureSelector<ReadonlyArray<Movie>>('movies')

export const selectMovieById = (id: number) =>
  createSelector(selectMovies, movies => movies.find(movie => movie.id === id))
