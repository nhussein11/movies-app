import { createReducer, on } from '@ngrx/store'
import { Movie } from 'src/app/movies/models/movie.model'
import * as MoviesActions from '../actions/movies.actions'

export const initialState: ReadonlyArray<Movie> = []

export const moviesReducer = createReducer(
  initialState,
  on(
    MoviesActions.retrievedMoviesList,
    (state, { movies }): ReadonlyArray<Movie> => [...state, ...movies]
  )
)
