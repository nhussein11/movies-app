import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { MoviesService } from '@movies/services/movies.service'
import { selectMovieById } from '@state/selectors/movies.selectors'

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.scss'],
})
export class MovieTrailerComponent implements OnInit {
  apiLoaded: boolean = false

  constructor(private store: Store, private moviesService: MoviesService) {}

  videoId = 'QIZ9aZD6vs0'

  ngOnInit() {
    const movieId = this.store.select(selectMovieById)
    movieId.subscribe(movieId => {
      this.moviesService.getMovieTrailer(movieId!).subscribe()
    })
    if (!this.apiLoaded) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.body.appendChild(tag)
      this.apiLoaded = true
    }
  }
}
