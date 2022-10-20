import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { selectMovies } from '../../../state/selectors/movies.selectors'
import { Movie } from '../../../shared/models/api.model'
import * as MoviesActions from '../../../state/actions/movies.actions'
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movies$!: Observable<ReadonlyArray<Movie>>
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(MoviesActions.loadMovies())
    this.movies$ = this.store.select(selectMovies)
  }
}
