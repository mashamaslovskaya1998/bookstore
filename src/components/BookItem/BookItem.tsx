import { IBook } from "../../types/";
import {
  StyledBlock,
  StyledImage,
  StyledImageBlock,
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
      <StyledLink to={`/books/${book.isbn13}`}>
        <StyledImageBlock>
          <StyledImage src={book.image} alt={book.title} />
        </StyledImageBlock>
        <StyledBlock>
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
        </StyledBlock>
      </StyledLink>
    </StyledMainBlock>
  );
};
