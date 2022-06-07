import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userReducer";
import cardsReducer from "./slices/cardReducer";
import bookReducer from "./slices/bookReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cards: cardsReducer,
    books: bookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
