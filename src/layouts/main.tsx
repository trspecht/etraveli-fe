import _ from "lodash"
import { useDispatch, useSelector } from "react-redux";
import { Container, Content, MainContainer, SeparatorH, SeparatorV } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { setIsLoading, setMoviesList } from "../store/reducers/movies";
import { Movie, MovieResponse } from "../types/movies";
import { AppState } from "../store/store";
import { Spinner } from "../components/spinner";
import { TopBar } from "../components/topbar/top-bar";
import { MovieItem } from "../components/movie/list-item";
import { Info } from "../components/movie/info";

const baseURL = import.meta.env.VITE_APP_API_URL as string

export default function Main() {
  const dispatch = useDispatch()

  const isLoading = useSelector<AppState, boolean>((state) => state.movies.isLoading)
  const moviesList = useSelector<AppState, Movie[]>((state) => state.movies.moviesList)
  const sortOption = useSelector<AppState, string | null>((state) => state.movies.sortOption)
  const searchInput = useSelector<AppState, string | null>((state) => state.movies.searchInput)

  const [localMoviesList, setLocalMoviesList] = useState<Movie[]>(moviesList)
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  const hasMoviesList = !_.isEmpty(moviesList)

  useEffect(() => {
    if (!hasMoviesList) {
      fetchMovies()
    }
  }, [])

  useEffect(() => {
    if (hasMoviesList) {
      setLocalMoviesList(moviesList)
    }
  }, [moviesList])

  useEffect(() => {
    if (sortOption) {
      setLocalMoviesList(_.orderBy(moviesList, [sortOption, "asc"]))
    }
  }, [sortOption])

  useEffect(() => {
    if (searchInput ) {
      const filteredList = _.filter(moviesList, (movie) => {
        return _.includes(movie.title.toLowerCase(), searchInput.toLowerCase())
      })
      setLocalMoviesList(filteredList)
    }
  }, [searchInput])

  const fetchMovies = () => {
      dispatch(setIsLoading(true))
      axios.get(baseURL)
        .then(response => {
          const moviesResponseData: MovieResponse = response.data
          dispatch(setMoviesList(moviesResponseData.results))
        })
        .catch((error) => console.log("ERROR: ", error))
        .finally(() => dispatch(setIsLoading(false)) )
  }

  const selectedMovieTitle = selectedMovie?.title || ""
  const selectedMovieDescription = selectedMovie?.opening_crawl || "No movie is selected. Select a movie to see its information."

  return (
    <MainContainer>
      {isLoading && <Spinner size={60} />}
      {!isLoading &&
      <>
      <TopBar />

      <SeparatorH />

      <Container>
      <Content>
        {localMoviesList.map((movie) =>
          <MovieItem
            key={movie.episode_id}
            isSelected={movie.episode_id === selectedMovie?.episode_id}
            episode={movie.episode_id}
            title={movie.title}
            rating={"5"}
            releaseDate={movie.release_date}
            onRowClick={() => setSelectedMovie(movie)}
          />
        )}
      </Content>


      <SeparatorV />


      <Content>
        <Info title={selectedMovieTitle} description={selectedMovieDescription}/>
      </Content>

      </Container>

      </>
      }
    </MainContainer>
  )
}