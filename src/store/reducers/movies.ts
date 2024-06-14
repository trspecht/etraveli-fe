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

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setMoviesList(state, action: PayloadAction<Movie[]>) {
      state.moviesList = action.payload
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