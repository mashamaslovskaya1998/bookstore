import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, ICards } from "../../types";

const initialState: ICards = {
  cards: [],
};

const cardsReducer = createSlice({
  name: "Cards",
  initialState,
  reducers: {
    addCards: (state, actions: PayloadAction<IBook>) => {
      state.cards.push(actions.payload);
    },
    removeCard: (state, { payload }: PayloadAction<IBook>) => {
      state.cards = state.cards.filter(
        (item) => item.isbn13 !== payload.isbn13
      );
    },
  },
});
export default cardsReducer.reducer;
export const { addCards, removeCard } = cardsReducer.actions;
