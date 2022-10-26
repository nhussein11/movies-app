import { createAction, props } from '@ngrx/store'
import { Serie } from '@shared/models/api.model'

export const loadSeries = createAction('[Series Page] Load Series')
export const selectSerie = createAction(
  '[Series Page] Select Serie',
  props<{ serieId: number }>()
)

export const retrieveSeriesList = createAction(
  '[Series API] Retrieve Series Success',
  props<{ series: ReadonlyArray<Serie> }>()
)

export const errorLoadingSeries = createAction(
  '[Series API] Series Loaded Error'
)
