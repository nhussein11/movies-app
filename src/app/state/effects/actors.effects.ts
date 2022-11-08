import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators'
import * as ActorsActions from '@state/actions/actors.actions'
import { ActorsService } from 'src/app/actors/services/actors.service'
import { Actor } from '@shared/models/api.model'

@Injectable()
export class ActorsEffects {
  constructor(
    private actions$: Actions,
    private _actorsService: ActorsService
  ) {}

  loadActors$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActorsActions.loadActors),
      mergeMap(() =>
        this._actorsService.getPopularActors().pipe(
          map((actors: Actor[]) =>
            ActorsActions.retrievedActorsList({ actors })
          ),
          catchError(() => of(ActorsActions.errorLoadingActors()))
        )
      )
    )
  })
}
