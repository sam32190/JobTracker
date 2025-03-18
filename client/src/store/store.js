import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteReducer"; // Import reducer

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});

export default store;
