import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actor, ApiResponse } from '@shared/models/api.model'
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(private _http: HttpClient) {}

  getPopularActors() {
    const url = `https://api.themoviedb.org/3/person/popular?api_key=${environment.apiKey}&language=en-US&page=1`

    return this._http
      .get<ApiResponse>(url)
      .pipe(map((data: ApiResponse) => data.results as Actor[]))
  }
}
