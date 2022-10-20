import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators'
import { MoviesService } from 'src/app/movies/services/movies.service'
import { Movie } from 'src/app/shared/models/api.model'
import * as MoviesActions from '../actions/movies.actions'

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      mergeMap(() =>
        this._moviesService.getMovies().pipe(
          map((movies: Movie[]) =>
            MoviesActions.retrievedMoviesList({ movies })
          ),
          catchError(() => of(MoviesActions.errorLoadingMovies))
        )
      )
    )
  })

  constructor(
    private actions$: Actions,
    private _moviesService: MoviesService
  ) {}
}
