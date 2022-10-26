import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators'
import { SeriesService } from '@series/services/series.service'
import * as SeriesActions from '@state/actions/series.actions'
import { Serie } from '@shared/models/api.model'

@Injectable()
export class SerieEffects {
  loadSeries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SeriesActions.loadSeries),
      mergeMap(() =>
        this._seriesService.getSeries().pipe(
          map((series: Serie[]) =>
            SeriesActions.retrieveSeriesList({ series })
          ),
          catchError(() => of(SeriesActions.errorLoadingSeries))
        )
      )
    )
  })

  constructor(
    private actions$: Actions,
    private _seriesService: SeriesService
  ) {}
}
