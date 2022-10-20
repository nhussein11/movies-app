import { ActionReducerMap } from '@ngrx/store'
import { Movie } from '../movies/models/movie.model'
import { moviesReducer } from './reducers/movies.reducers'

export interface AppState {
  movies: ReadonlyArray<Movie>
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  movies: moviesReducer,
}
