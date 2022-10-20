import { createAction, props } from '@ngrx/store'
import { Movie } from 'src/app/shared/models/api.model'

export const loadMovies = createAction('[Movies Page] Load Movies')

export const loadMovieDetails = createAction(
  '[Movies Page] Load Movie Detals',
  props<{ id: number }>()
)

export const retrievedMoviesList = createAction(
  '[Movies API] Retrieve Movies Success',
  props<{ movies: ReadonlyArray<Movie> }>()
)

export const errorLoadingMovies = createAction(
  '[Movies API] Movies Loaded Error'
)
