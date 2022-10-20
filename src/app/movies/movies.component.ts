import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { selectMovies } from '../state/selectors/movies.selectors'
import { Movie } from './models/movie.model'
import { MoviesService } from './services/movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies$!: Observable<ReadonlyArray<Movie>>
  constructor(private _moviesService: MoviesService, private store: Store) {}

  ngOnInit() {
    this._moviesService.getMovies().subscribe()
    this.movies$ = this.store.select(selectMovies)
  }
}
