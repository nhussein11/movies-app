import { createAction, props } from '@ngrx/store'
import { Movie } from 'src/app/movies/models/movie.model'

export const loadMovies = createAction('[Movies Page] Load Movies')

export const retrievedMoviesList = createAction(
  '[Movies API] Retrieve Movies Success',
  props<{ movies: ReadonlyArray<Movie> }>()
)

export const errorLoadingMovies = createAction(
  '[Movies API] Movies Loaded Error'
)
