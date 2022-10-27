import { createReducer, on } from '@ngrx/store'
import { MoviesState } from '@state/app.state'
import { Movie } from '@shared/models/api.model'
import * as MoviesActions from '@state/actions/movies.actions'

export const initialState: MoviesState = {
  movies: [] as ReadonlyArray<Movie>,
  selectedMovieId: null,
  videoKey: null,
}

export const moviesReducer = createReducer(
  initialState,
  on(MoviesActions.retrievedMoviesList, (state, { movies }): MoviesState => {
    return {
      ...state,
      movies: [...state.movies, ...movies],
    }
  }),
  on(MoviesActions.selectMovie, (state, { movieId }): MoviesState => {
    return {
      ...state,
      selectedMovieId: movieId,
    }
  }),
  on(MoviesActions.retrievedMovieVideo, (state, { videoKey }): MoviesState => {
    return {
      ...state,
      videoKey,
    }
  })
)
