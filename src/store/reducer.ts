import { combineReducers } from "@reduxjs/toolkit"
import movies from "./reducers/movies"

export default combineReducers({
  movies: movies
})