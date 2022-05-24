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
    // counterCards: (state, actions: PayloadAction<IBook>) =>{

    // }
  },
});
export default cardsReducer.reducer;
export const { addCards } = cardsReducer.actions;
