import { createReducer, on } from '@ngrx/store'
import { Serie } from 'src/app/shared/models/api.model'
import * as SeriesActions from '../actions/series.actions'

export const initialState: ReadonlyArray<Serie> = []

export const seriesReducer = createReducer(
  initialState,
  on(
    SeriesActions.retrieveSeriesList,
    (state, { series }): ReadonlyArray<Serie> => [...state, ...series]
  )
)
