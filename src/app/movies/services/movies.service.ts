import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, tap } from 'rxjs'
import { environment } from 'src/environments/environment'
import {
  ApiResponse,
  ApiVideoResponse,
  Movie,
  Video,
} from '@shared/models/api.model'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&language=en-US&page=1`

    return this._http
      .get<ApiResponse>(url)
      .pipe(map((data: ApiResponse) => data.results as Movie[]))
  }

  getMovieTrailer(movieId: number) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${environment.apiKey}&language=en-US`

    return this._http.get<ApiVideoResponse>(url).pipe(
      map((data: ApiVideoResponse) => {
        data.results.forEach((video: Video) => {
          if (video.type === 'Trailer' && video.site === 'YouTube') {
            return video.key
          }
          return
        })
      })
    )
  }
}
