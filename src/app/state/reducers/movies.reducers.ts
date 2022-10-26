import { createReducer, on } from '@ngrx/store'
import { Movie } from 'src/app/shared/models/api.model'
import * as MoviesActions from '../actions/movies.actions'
import { MoviesState } from '../app.state'

export const initialState: MoviesState = {
  movies: [] as ReadonlyArray<Movie>,
  selectedMovieId: null,
}

export const moviesReducer = createReducer(
  initialState,
  on(MoviesActions.retrievedMoviesList, (state, { movies }): MoviesState => {
    return {
      movies: [...state.movies, ...movies],
      selectedMovieId: null,
    }
  }),
  on(MoviesActions.selectMovie, (state, { movieId }): MoviesState => {
    return {
      ...state,
      selectedMovieId: movieId,
    }
  })
)
