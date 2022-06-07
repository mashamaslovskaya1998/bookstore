import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks/hook";
import { getCards } from "../../store/selector/cardsSelector";
import { IBookCard } from "../../types";

import { CardItem } from "../CardItem/CardItem";
import { StyledCartList, TotalContainer, TotalPrice } from "./style";

interface IProps {
  books: IBookCard[];
}
export const CardList = ({ books }: IProps) => {
  // const { cards } = useAppSelector(getCards);
  const [total, setTotal] = useState(0.0);
  useEffect(() => {
    let totalAmount = 0.0;
    books.forEach((book) => {
      totalAmount += book.amount * Number(book.price.slice(1));
    });
    setTotal(totalAmount);
  }, [books]);

  return (
    <>
      <StyledCartList>
        {books.map((book) => {
          return <CardItem book={book}></CardItem>;
        })}
      </StyledCartList>
      <TotalContainer>
        <TotalPrice>Total: ${total.toFixed(2)} </TotalPrice>
      </TotalContainer>
    </>
  );
};
