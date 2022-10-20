import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Movie } from './models/movie.model'
import { MoviesService } from './services/movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies$!: Observable<Movie[]>
  constructor(private _moviesService: MoviesService) {}

  ngOnInit() {
    console.log('on movies')
    this.movies$ = this._moviesService.getMovies()
  }
}
