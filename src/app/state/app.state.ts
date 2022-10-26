import { ActionReducerMap } from '@ngrx/store'
import { Movie, Serie } from '../shared/models/api.model'
import { moviesReducer } from './reducers/movies.reducers'
import { seriesReducer } from './reducers/series.reducers'

export interface MoviesState {
  movies: ReadonlyArray<Movie>
  selectedMovieId: number | null
}

export interface SeriesState {
  series: ReadonlyArray<Serie>
  selectedSerieId: number | null
}

export interface AppState {
  movies: MoviesState
  series: SeriesState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  movies: moviesReducer,
  series: seriesReducer,
}
