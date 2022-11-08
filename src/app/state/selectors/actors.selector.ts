import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ActorsState } from '@state/app.state'

export const selectActorsState = createFeatureSelector<ActorsState>('actors')

export const selectActors = createSelector(
  selectActorsState,
  (state: ActorsState) => state.actors
)

export const selectMovieById = createSelector(
  selectActorsState,
  (state: ActorsState) => state.selectedActorId
)
