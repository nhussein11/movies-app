export interface ApiResponse {
  page: number
  results: Movie[] | Serie[] | Actor[]
  total_pages: number
  total_results: number
}
export interface ApiVideoResponse {
  id: number
  results: Video[]
}
export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: OriginalLanguage
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: Date
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Serie {
  backdrop_path: string
  first_air_date: Date
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: OriginalLanguage
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export interface Genre {
  id: number
  name: string
}
export interface Video {
  id: string
  iso_639_1: string
  iso_3166_1: string
  key: string
  name: string
  site: string
  size: number
  type: string
  official: boolean
}
export interface Actor {
  adult: boolean
  gender: number
  id: number
  known_for: KnownFor[]
  known_for_department: string
  name: string
  popularity: number
  profile_path: string
}

export interface KnownFor {
  adult?: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: number
  media_type: MediaType
  original_language: OriginalLanguage
  original_title?: string
  overview: string
  poster_path: string
  release_date?: Date
  title?: string
  video?: boolean
  vote_average: number
  vote_count: number
  first_air_date?: Date
  name?: string
  origin_country?: string[]
  original_name?: string
}

export enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}

export enum OriginalLanguage {
  En = 'en',
  Es = 'es',
  Fr = 'fr',
  Ja = 'ja',
  Ko = 'ko',
  Tl = 'tl',
  Tr = 'tr',
}
