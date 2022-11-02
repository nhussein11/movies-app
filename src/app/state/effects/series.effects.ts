import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { map, catchError, mergeMap } from 'rxjs/operators'
import { SeriesService } from '@series/services/series.service'
import * as SeriesActions from '@state/actions/series.actions'
import { Serie } from '@shared/models/api.model'

@Injectable()
export class SerieEffects {
  constructor(
    private actions$: Actions,
    private _seriesService: SeriesService
  ) {}
  loadSeries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SeriesActions.loadSeries),
      mergeMap(() =>
        this._seriesService.getSeriesWithGenres().pipe(
          map((series: Serie[]) =>
            SeriesActions.retrieveSeriesList({ series })
          ),
          catchError(() => of(SeriesActions.errorLoadingSeries()))
        )
      )
    )
  })
  loadSeriesBySearch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SeriesActions.searchSerie),
      mergeMap(action =>
        this._seriesService.getSeriesBySearch(action.search).pipe(
          map((series: Serie[]) =>
            SeriesActions.retrieveSeriesList({ series })
          ),
          catchError(() => of(SeriesActions.errorLoadingSeries()))
        )
      )
    )
  })
}
