import { RootState } from "../store";

export const getCards = (state: RootState) => state.cards;
// export const getSumTotalCarts = (state: RootState) =>
//   state.cards.cardsRoot.sumTotal;
// export const getVatCarts = (state: RootState) => state.cards.cardsRoot.vat;
// export const getTotalCarts = (state: RootState) => state.cards.cardsRoot.total;
