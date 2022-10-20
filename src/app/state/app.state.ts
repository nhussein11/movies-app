import { ActionReducerMap } from '@ngrx/store'
import { Movie, Serie } from '../shared/models/api.model'
import { moviesReducer } from './reducers/movies.reducers'
import { seriesReducer } from './reducers/series.reducers'

export interface AppState {
  movies: ReadonlyArray<Movie>
  series: ReadonlyArray<Serie>
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  movies: moviesReducer,
  series: seriesReducer,
}
