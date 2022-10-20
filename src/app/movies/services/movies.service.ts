import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, Observable, tap } from 'rxjs'
import { retrievedMoviesList } from 'src/app/state/actions/movies.actions'
import { environment } from 'src/environments/environment'
import { ApiResponse as ApiResponse, Movie } from '../models/movie.model'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient, private store: Store) {}

  getMovies() {
    return this._http
      .get<ApiResponse>(
        `https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&language=en-US&page=1`
      )
      .pipe(map((data: ApiResponse) => data.results))
  }
}
