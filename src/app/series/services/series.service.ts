import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { forkJoin, map, mergeMap, Observable, tap } from 'rxjs'
import { ApiResponse, Genre, Serie } from '@shared/models/api.model'
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

  getGenres() {
    return this.http
      .get(
        `
        https://api.themoviedb.org/3/genre/tv/list?api_key=${environment.apiKey}&language=en-US
        `
      )
      .pipe(map((data: any) => data.genres))
  }

  getSeriesWithGenres() {
    const series$ = this.getSeries()
    const genres$ = this.getGenres()

    return forkJoin([series$, genres$]).pipe(
      map(([series, genres]) =>
        series.map(serie => ({
          ...serie,
          genre_ids: serie.genre_ids.map(
            genreId => genres.find((genre: Genre) => genre.id === genreId)?.name
          ),
        }))
      )
    )
  }

  getSeriesBySearch(search: string) {
    return this.http
      .get<ApiResponse>(
        `
        https://api.themoviedb.org/3/search/tv?api_key=${environment.apiKey}&language=en-US&query=${search}
        `
      )
      .pipe(map((data: ApiResponse) => data.results as Serie[]))
  }
  getSeriesBySearchWithGenres(search: string) {
    const series$ = this.getSeriesBySearch(search)
    const genres$ = this.getGenres()

    return forkJoin([series$, genres$]).pipe(
      map(([series, genres]) => {
        return series.map((serie: Serie) => {
          serie.genre_ids = serie.genre_ids.map(genreId => {
            return genres.find((genre: Genre) => genre.id === genreId)?.name
          })
          return serie
        })
      })
    )
  }
}
