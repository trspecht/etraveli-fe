import { useDispatch, useSelector } from "react-redux";
import { Container } from "./styles";
import { useEffect } from "react";
import axios from "axios";
import { setIsLoading, setMoviesList } from "../store/reducers/movies";
import { Movie, MovieResponse } from "../types/movies";
import { AppState } from "../store/store";
import { Spinner } from "../components/spinner";

const BASE_URL = "https://swapi.dev/api/films/?format=json"

export default function Main() {
  const dispatch = useDispatch()
  const isLoading = useSelector<AppState, boolean>((state) => state.movies.isLoading)
  const moviesList = useSelector<AppState, Movie[]>((state) => state.movies.moviesList)

  useEffect(() => {
    if (moviesList.length === 0) {
      fetchMovies()
    }
  }, [])

  const fetchMovies = () => {
      dispatch(setIsLoading(true))
      axios.get(BASE_URL)
        .then(response => {
          const moviesResponseData: MovieResponse = response.data
          dispatch(setMoviesList(moviesResponseData.results))
        })
        .catch((error) => console.log("ERROR: ", error))
        .finally(() => dispatch(setIsLoading(false)) )
  }

  return (
    <Container>
      {isLoading && <Spinner size={60} />}
    </Container>
  )
}