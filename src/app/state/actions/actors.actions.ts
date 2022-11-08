import { createAction, props } from '@ngrx/store'
import { Actor } from '@shared/models/api.model'

export const loadActors = createAction('[Actors Page] Load Actors')

export const selectActor = createAction(
  '[Actors Page] Select Actor',
  props<{ actorId: number }>()
)

export const retrievedActorsList = createAction(
  '[Actors API] Retrieve Movies Success',
  props<{ actors: ReadonlyArray<Actor> }>()
)

export const errorLoadingActors = createAction(
  '[Actors API] Actors Loaded Error'
)
