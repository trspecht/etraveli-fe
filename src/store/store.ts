import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export type AppState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: reducer
})