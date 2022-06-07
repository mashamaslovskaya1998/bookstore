import { IBook } from "../../types/";
import {
  StyledImage,
  StyledLink,
  StyledMainBlock,
  StyledPrice,
  StyledSubtitle,
  StyledText,
  StyledTitle,
} from "./style";

interface IBookItemProps {
  book: IBook;
}
export const BookItem = ({ book }: IBookItemProps) => {
  return (
    <StyledMainBlock>
      <StyledLink to={`/bookstore/books/${book.isbn13}`}>
        <StyledImage src={book.image} alt={book.title} />
        <StyledTitle>{book.title ? book.title : "No title"}</StyledTitle>
        <StyledText>
          Isbn №:
          {book.isbn13 ? book.isbn13 : "No isbn"}
        </StyledText>
        <StyledSubtitle>
          {book.subtitle ? book.subtitle : "No subtitle"}
        </StyledSubtitle>
        <StyledPrice>
          {book.price === "$0.00" ? "Free" : book.price}
        </StyledPrice>
      </StyledLink>
    </StyledMainBlock>
  );
};
