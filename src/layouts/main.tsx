import _ from "lodash"
import { useDispatch, useSelector } from "react-redux";
import { Container, Content, MainContainer, SeparatorH, SeparatorV } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { setIsLoading, setMoviesList } from "../store/reducers/movies";
import { Movie, MovieResponse, OMDBResponse, Rating } from "../types/movies";
import { AppState } from "../store/store";
import { Spinner } from "../components/spinner";
import { TopBar } from "../components/topbar/top-bar";
import { MovieItem } from "../components/movie/list-item";
import { Info } from "../components/movie/info";

const baseURL = import.meta.env.VITE_APP_API_URL as string
const omdbBaseURL = import.meta.env.VITE_APP_OMDB_API_URL as string

enum RatingSources {
  IMDB = "Internet Movie Database",
  ROTTEN_TOMATOES = "Rotten Tomatoes",
  METACRITIC = "Metacritic"
}

export default function Main() {
  const dispatch = useDispatch()

  const isLoading = useSelector<AppState, boolean>((state) => state.movies.isLoading)
  const moviesList = useSelector<AppState, Movie[]>((state) => state.movies.moviesList)
  const sortOption = useSelector<AppState, string | null>((state) => state.movies.sortOption)
  const searchInput = useSelector<AppState, string>((state) => state.movies.searchInput)

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [localMoviesList, setLocalMoviesList] = useState<Movie[]>(moviesList)

  useEffect(() => {
    fetchMovies()
  }, [])

  useEffect(() => {
    setLocalMoviesList(moviesList)
  }, [moviesList])

  useEffect(() => {
    if (sortOption) {
      setLocalMoviesList(_.orderBy(moviesList, [sortOption, "asc"]))
    }
  }, [sortOption])

  useEffect(() => {
    const filteredList = _.filter(moviesList, (movie) =>
      _.includes(movie.title.toLowerCase(), searchInput.toLowerCase())
    )
    setLocalMoviesList(filteredList)
  }, [searchInput])

  const fetchMovies = () => {
      dispatch(setIsLoading(true))
      axios.get<MovieResponse>(baseURL)
        .then(response => {
          const moviesResponseData: MovieResponse = response.data
         moviesResponseData.results.map((movie) => fetchMoviesExtraInfo(movie))
        })
        .catch((error) => console.log("ERROR: ", error))
        .finally(() =>  dispatch(setIsLoading(false)))
  }

  const fetchMoviesExtraInfo = (movie: Movie): Movie => {
    const episodes = ["I", "II", "III", "IV", "V", "VI"]
    const searchURL = `${omdbBaseURL}t=star+wars+episode+${episodes[movie.episode_id - 1]}`
    const tempMovie: Movie = _.cloneDeep(movie)

    axios.get<OMDBResponse>(searchURL)
      .then(response => {
        const OMDBResponseData: OMDBResponse = response.data
        tempMovie.poster = OMDBResponseData.Poster
        tempMovie.ratings = OMDBResponseData.Ratings
        dispatch(setMoviesList(tempMovie))
      })
      .catch((error) => console.log("ERROR: ", error))

      return tempMovie
}

const getAverageRatings = (ratings: Rating[]): number => {
  let averageRating = 0

  ratings?.map((rating) => {
    let value = 0
    switch (rating.Source) {
      case RatingSources.IMDB:
        value = Number(rating.Value.split("/")[0]) * 10
        break;
      case RatingSources.ROTTEN_TOMATOES:
        value = Number(rating.Value.split("%")[0])
        break;
      case RatingSources.METACRITIC:
        value = Number(rating.Value.split("/")[0])
        break;
      }

      averageRating += value
  })

  const ratingsCount = ratings?.length
  return averageRating/ratingsCount
}

  return (
    <MainContainer>
      {isLoading && <Spinner size={60} />}
      {!isLoading &&
      <>
      <TopBar />
      <SeparatorH />
      <Container>
        <Content>
          {localMoviesList?.map((movie) =>
            <MovieItem
              key={movie.episode_id}
              isSelected={movie.episode_id === selectedMovie?.episode_id}
              episode={movie.episode_id}
              title={movie.title}
              rating={movie.ratings && getAverageRatings(movie.ratings)}
              releaseDate={movie.release_date}
              onRowClick={() => setSelectedMovie(movie)}
            />
          )}
        </Content>
        <SeparatorV />
        <Content>
          <Info
            title={selectedMovie?.title || ""}
            description={selectedMovie?.opening_crawl || ""}
            poster={selectedMovie?.poster || ""}
            director={selectedMovie?.director || ""}
            averageRating={getAverageRatings(selectedMovie?.ratings || [])}
            ratings={selectedMovie?.ratings || []}
          />
        </Content>
      </Container>
      </>
      }
    </MainContainer>
  )
}