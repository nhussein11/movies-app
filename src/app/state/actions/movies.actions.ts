import { createAction, props } from '@ngrx/store'
import { Movie } from 'src/app/movies/models/movie.model'

export const retrievedMoviesList = createAction(
  '[Movies API] Retrieve Movies Success',
  props<{ movies: ReadonlyArray<Movie> }>()
)
