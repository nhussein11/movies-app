import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { selectMovies } from '@state/selectors/movies.selectors'
import { Movie } from '@shared/models/api.model'
import * as MoviesActions from '@state/actions/movies.actions'

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  movies$!: Observable<ReadonlyArray<Movie>>
  isMovieSelected: boolean = false

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ]

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(MoviesActions.loadMovies())
    this.movies$ = this.store.select(selectMovies)
  }

  movieSelected(movieId: number) {
    this.store.dispatch(MoviesActions.selectMovie({ movieId }))
    this.isMovieSelected = true
  }
}
