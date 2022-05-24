import { configureStore } from "@reduxjs/toolkit";
// import detailsBookReducer from "./slices/detailsBookReducer";
import favoritesReducer from "./slices/favoritesReducer";
import userReducer from "./slices/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
