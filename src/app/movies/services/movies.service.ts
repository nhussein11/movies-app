import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, tap } from 'rxjs'

import {
  ApiResponse,
  ApiVideoResponse,
  Movie,
  Video,
} from '@shared/models/api.model'
import { environment } from 'src/environments/environment'

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

  getMovieTrailer(movieId: number): Observable<string> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${environment.apiKey}&language=en-US`

    return this._http.get<ApiVideoResponse>(url).pipe(
      map(({ results }: ApiVideoResponse) => results),
      map((videos: Video[]) => {
        return videos.find(
          (video: Video) => video.type === 'Trailer' && video.site === 'YouTube'
        )
      }),
      map((video: Video | undefined) => video?.key || '')
    )
  }
}
