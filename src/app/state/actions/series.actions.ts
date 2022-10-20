import { createAction, props } from '@ngrx/store'
import { Serie } from 'src/app/shared/models/api.model'

export const loadSeries = createAction('[Series Page] Load Series')

export const retrieveSeriesList = createAction(
  '[Series API] Retrieve Series Success',
  props<{ movies: ReadonlyArray<Serie> }>()
)

export const errorLoadingSeries = createAction(
  '[Series API] Series Loaded Error'
)
