import { createReducer, on } from '@ngrx/store'
import { MoviesState } from '@state/app.state'
import { Movie } from '@shared/models/api.model'
import * as MoviesActions from '@state/actions/movies.actions'

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
