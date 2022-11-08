import { createReducer, on } from '@ngrx/store'
import { Actor } from '@shared/models/api.model'
import { ActorsState, MoviesState } from '@state/app.state'
import * as ActorsActions from '@state/actions/actors.actions'

export const initialState: ActorsState = {
  actors: [] as ReadonlyArray<Actor>,
  selectedActorId: null,
}

export const actorsReducer = createReducer(
  initialState,
  on(ActorsActions.retrievedActorsList, (state, { actors }): ActorsState => {
    return {
      ...state,
      actors: [...state.actors, ...actors],
    }
  }),
  on(ActorsActions.selectActor, (state, { actorId }): ActorsState => {
    return {
      ...state,
      selectedActorId: actorId,
    }
  })
)
