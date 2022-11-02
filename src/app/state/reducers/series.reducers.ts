import { createReducer, on } from '@ngrx/store'
import { Serie } from '@shared/models/api.model'
import { SeriesState } from '@state/app.state'
import * as SeriesActions from '@state/actions/series.actions'

export const initialState: SeriesState = {
  series: [] as ReadonlyArray<Serie>,
  selectedSerieId: null,
}
export const seriesReducer = createReducer(
  initialState,
  on(SeriesActions.retrieveSeriesList, (state, { series }): SeriesState => {
    return {
      series: [...series],
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
