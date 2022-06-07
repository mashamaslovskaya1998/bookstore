import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, IBookDetailsApi, IUserStore } from "../../types";

const initialState: IUserStore = {
  isAuth: false,
  email: undefined,
  name: undefined,
  favorites: [],
  password: undefined,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuth = true;
      state.email = action.payload;
    },
    setUserName: (state, action) => {
      state.name = action.payload;
    },
    unsetUser: (state) => {
      state.isAuth = false;
      state.email = undefined;
    },
    addFavorites: (state, { payload }: PayloadAction<IBookDetailsApi>) => {
      state.favorites = [
        { ...payload },
        ...state.favorites.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },
    removeFavorites: (state, { payload }: PayloadAction<IBook>) => {
      state.favorites = state.favorites.filter(
        (item) => item.isbn13 !== payload.isbn13
      );
    },
  },
});

export const {
  setUser,
  unsetUser,
  setUserName,
  addFavorites,
  removeFavorites,
} = userSlice.actions;
export default userSlice.reducer;
