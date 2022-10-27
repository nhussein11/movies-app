import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import {
  selectActiveVideoKey,
  selectMovieById,
} from '@state/selectors/movies.selectors'
import * as MoviesActions from '@state/actions/movies.actions'
import { map, Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
})
export class MovieTrailerComponent implements OnInit, OnDestroy {
  movieIdSubscription!: Subscription
  apiLoaded: boolean = false
  videoKey$: Observable<string | null> = this.store.select(selectActiveVideoKey)

  constructor(private store: Store) {}

  ngOnInit() {
    const movieId = this.store.select(selectMovieById)
    this.movieIdSubscription = movieId.subscribe(movieId => {
      if (movieId) {
        this.store.dispatch(MoviesActions.loadMovieVideo({ movieId }))
      }
    })

    if (!this.apiLoaded) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.body.appendChild(tag)
      this.apiLoaded = true
    }
  }

  ngOnDestroy() {
    this.movieIdSubscription.unsubscribe()
  }
}
