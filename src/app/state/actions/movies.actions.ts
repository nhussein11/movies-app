import { createAction, props } from '@ngrx/store'
import { Movie } from '@shared/models/api.model'

export const loadMovies = createAction('[Movies Page] Load Movies')

export const selectMovie = createAction(
  '[Movies Page] Select Movie',
  props<{ movieId: number }>()
)
export const loadMovieVideo = createAction(
  '[Movies Page] Load Movie Video',
  props<{ movieId: number }>()
)
export const retrievedMovieVideo = createAction(
  '[Movies Page] Retrieved Movie Video',
  props<{ videoKey: string }>()
)

export const retrievedMoviesList = createAction(
  '[Movies API] Retrieve Movies Success',
  props<{ movies: ReadonlyArray<Movie> }>()
)

export const errorLoadingMovies = createAction(
  '[Movies API] Movies Loaded Error'
)
export const errorLoadingMovieVideo = createAction(
  '[Movies API] Movie Video Loaded Error'
)
