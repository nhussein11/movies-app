import { createReducer, on } from '@ngrx/store'
import { Serie } from 'src/app/shared/models/api.model'
import * as SeriesActions from '../actions/series.actions'
import { SeriesState } from '../app.state'

export const initialState: SeriesState = {
  series: [] as ReadonlyArray<Serie>,
  selectedSerieId: null,
}
export const seriesReducer = createReducer(
  initialState,
  on(SeriesActions.retrieveSeriesList, (state, { series }): SeriesState => {
    return {
      series: [...state.series, ...series],
      selectedSerieId: null,
    }
  }),
  on(SeriesActions.selectSerie, (state, { serieId }): SeriesState => {
    return {
      ...state,
      selectedSerieId: serieId,
    }
  })
)
