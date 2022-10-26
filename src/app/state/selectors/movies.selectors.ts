import { createFeatureSelector, createSelector } from '@ngrx/store'
import { MoviesState } from '@state/app.state'

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
