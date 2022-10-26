import { createFeatureSelector, createSelector } from '@ngrx/store'
import { Movie } from 'src/app/shared/models/api.model'
import { MoviesState } from '../app.state'

export const selectMoviesState = createFeatureSelector<MoviesState>('movies')

export const selectMovies = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.movies
)

export const selectMovieById = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.selectedMovieId
)

export const selectActiveMovie = createSelector(
  selectMovies,
  selectMovieById,
  (movies, movieId) => movies.find(movie => movie.id === movieId)
)
