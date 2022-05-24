import React from "react";
import { routes } from "../../routes/routes";
import { IBook, IFavorites } from "../../types";
import {
  StyledBlock,
  StyledImage,
  StyledImageBlock,
  StyledLink,
  StyledPrice,
  StyledSubtitle,
  StyledTitle,
} from "./style";

interface IBookItemProps {
  book: IBook;
}

export const FavoriteItem = ({ book }: IBookItemProps) => {
  return (
    <StyledLink to={`${routes.FAVORITEBOOKS}/${book.isbn13}`}>
      <StyledImageBlock>
        <StyledImage src={book.image} alt={book.title} />
      </StyledImageBlock>
      <StyledBlock>
        <StyledTitle>{book.title}</StyledTitle>
        <StyledSubtitle>{book.subtitle}</StyledSubtitle>
        <StyledPrice>{book.price}</StyledPrice>
      </StyledBlock>
    </StyledLink>
  );
};
