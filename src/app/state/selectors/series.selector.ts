import { createFeatureSelector } from '@ngrx/store'
import { Serie } from '@shared/models/api.model'

export const selectSeries =
  createFeatureSelector<ReadonlyArray<Serie>>('series')
