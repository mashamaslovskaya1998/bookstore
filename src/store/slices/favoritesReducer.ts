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
    removeFavorites: (state, { payload }: PayloadAction<IBook>) => {
      state.favorites = state.favorites.filter(
        (item) => item.isbn13 !== payload.isbn13
      );
    },
  },
});

export default favoritesReducer.reducer;
export const { addFavorites, removeFavorites } = favoritesReducer.actions;
