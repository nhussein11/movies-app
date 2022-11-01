import { createFeatureSelector, createSelector } from '@ngrx/store'
import { Serie } from '@shared/models/api.model'
import { SeriesState } from '@state/app.state'

export const selectSeriesState = createFeatureSelector<SeriesState>('series')

export const selectSeries = createSelector(
  selectSeriesState,
  (state: SeriesState) => state.series
)
