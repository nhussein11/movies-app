import { createFeatureSelector } from '@ngrx/store'
import { Serie } from 'src/app/shared/models/api.model'

export const selectSeries =
  createFeatureSelector<ReadonlyArray<Serie>>('series')
