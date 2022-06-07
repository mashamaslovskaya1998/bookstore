import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, IBookCard, IBookDetailsApi, ICards } from "../../types";

const initialState: ICards = {
  cards: [],
  total: 0,
  isLoading: true,
};

const cardsReducer = createSlice({
  name: "Cards",
  initialState,
  reducers: {
    addCards: (state, { payload }: PayloadAction<IBookCard>) => {
      state.cards = [
        { ...payload },
        ...state.cards.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },
    removeCard: (state, { payload }: PayloadAction<IBookDetailsApi>) => {
      state.cards = state.cards.filter(
        (item) => item.isbn13 !== payload.isbn13
      );
    },
    increaseAmount: (state, { payload }: PayloadAction<IBookCard>) => {
      const cards = state.cards.find((item) => item.isbn13 === payload.isbn13);

      if (cards) {
        cards.amount = cards.amount + 1;
      }
    },
    decreaseAmount: (state, { payload }: PayloadAction<IBookCard>) => {
      const cards = state.cards.find((item) => item.isbn13 === payload.isbn13);

      if (cards) {
        cards.amount = cards.amount - 1;
      }
    },
  },
});
export default cardsReducer.reducer;
export const { addCards, removeCard, decreaseAmount, increaseAmount } =
  cardsReducer.actions;
