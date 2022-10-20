import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators'
import { SeriesService } from 'src/app/series/services/series.service'
import { Serie } from 'src/app/shared/models/api.model'
import * as SeriesActions from '../actions/series.actions'

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
