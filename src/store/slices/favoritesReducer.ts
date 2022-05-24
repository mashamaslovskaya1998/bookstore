import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, IFavorites } from "../../types";

const initialState: IFavorites = {
  favorites: [],
};
const favoritesReducer = createSlice({
  name: "Favorites",
  initialState,
  reducers: {
    addFavorites: (state, actions: PayloadAction<IBook>) => {
      state.favorites.push(actions.payload);
    },
  },
});

export default favoritesReducer.reducer;
export const { addFavorites } = favoritesReducer.actions;
