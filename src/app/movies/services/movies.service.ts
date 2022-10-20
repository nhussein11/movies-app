import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, tap } from 'rxjs'
import { ApiResopnse, Movie } from '../models/movie.model'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this._http
      .get<ApiResopnse>(
        'https://api.themoviedb.org/3/movie/popular?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US&page=1'
      )
      .pipe(map((data: ApiResopnse) => data.results))
  }
}
