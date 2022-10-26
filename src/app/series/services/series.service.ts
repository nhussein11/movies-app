import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs'
import { ApiResponse, Serie } from '@shared/models/api.model'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  constructor(private http: HttpClient) {}
  getSeries() {
    return this.http
      .get<ApiResponse>(
        `
        https://api.themoviedb.org/3/tv/popular?api_key=${environment.apiKey}&language=en-US
        `
      )
      .pipe(map((data: ApiResponse) => data.results as Serie[]))
  }
}
