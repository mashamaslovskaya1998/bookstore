import { useAppSelector } from "../../store/hooks/hook";
import { getCards } from "../../store/selector/cardsSelector";

import { CardItem } from "../CardItem/CardItem";

export const CardList = () => {
  const { cards } = useAppSelector(getCards);
  return (
    <>
      {cards.map((book) => {
        return <CardItem book={book}></CardItem>;
      })}
    </>
  );
};
