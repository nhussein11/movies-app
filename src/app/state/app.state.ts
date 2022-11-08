import { ActionReducerMap } from '@ngrx/store'
import { Actor, Movie, Serie } from '@shared/models/api.model'
import { actorsReducer } from './reducers/actors.reducer'
import { moviesReducer } from './reducers/movies.reducers'
import { seriesReducer } from './reducers/series.reducers'

export interface MoviesState {
  movies: ReadonlyArray<Movie>
  selectedMovieId: number | null
  videoKey: string | null
}

export interface SeriesState {
  series: ReadonlyArray<Serie>
  selectedSerieId: number | null
}
export interface ActorsState {
  actors: ReadonlyArray<Actor>
  selectedActorId: number | null
}
export interface AppState {
  movies: MoviesState
  series: SeriesState
  actors: ActorsState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  movies: moviesReducer,
  series: seriesReducer,
  actors: actorsReducer,
}
