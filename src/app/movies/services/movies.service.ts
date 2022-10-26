import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, tap } from 'rxjs'
import { environment } from 'src/environments/environment'
import { ApiResponse, Movie } from '../../shared/models/api.model'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this._http
      .get<ApiResponse>(
        `https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&language=en-US&page=1`
      )
      .pipe(map((data: ApiResponse) => data.results as Movie[]))
  }
  getMovieTrailer(movieId: number) {
    return this._http
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${environment.apiKey}&language=en-US`
      )
      .pipe(
        tap((data: any) => {
          data.results.forEach((video: any) => {
            if (video.type === 'Trailer' && video.site === 'YouTube') {
              console.log(video)
              return video.key
            }
          })
        })
      )
  }
}
