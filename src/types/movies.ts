export type MovieResponse = {
  count: number
  next: string | null
  previous: string | null
  results: Movie[]
}

export type OMDBResponse = {
    Poster: string
    Ratings: Rating[]
}

export type Rating = {
  Source: string
  Value: string
}

export type Movie = {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: Date
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: Date
  edited: Date
  url: string
  poster: string
  ratings: Rating[]
  average_rating: number
}