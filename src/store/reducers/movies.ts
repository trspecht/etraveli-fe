import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Movie } from "../../types/movies"

interface State {
  isLoading: boolean
  moviesList: Movie[]
  sortOption: string | null
  searchInput: string
}

const initialState = {
  isLoading: false,
  moviesList: [] as Movie[],
  sortOption: null,
  searchInput: ""
} as State

const addOrUpdateMovieList = (movieList: Movie[], movie: Movie) => {
  const newList = [...movieList]
  const index = newList.findIndex(item => item.episode_id === movie.episode_id)

  if (index === -1) {
    newList.push(movie)
  } else {
    newList[index] = movie
  }
  return newList
}

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setMoviesList(state, action: PayloadAction<Movie>) {
      state.moviesList = addOrUpdateMovieList(state.moviesList, action.payload)
    },
    setSortOption(state, action: PayloadAction<string>) {
      state.sortOption = action.payload
    },
    setSearchInput(state, action: PayloadAction<string>) {
      state.searchInput = action.payload
    }
  }
})

export const {
  setIsLoading,
  setMoviesList,
  setSortOption,
  setSearchInput
} = moviesSlice.actions

export default moviesSlice.reducer