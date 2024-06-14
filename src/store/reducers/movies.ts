import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Movie } from "../../types/movies"

interface State {
  isLoading: boolean
  moviesList: Movie[]
}

const initialState = {
  isLoading: false,
  moviesList: [] as Movie[],
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
    }
  }
})

export const {
  setIsLoading,
  setMoviesList
} = moviesSlice.actions

export default moviesSlice.reducer