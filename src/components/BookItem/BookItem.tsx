import { IBook } from "../../types/";
import {
  StyledBlock,
  StyledImage,
  StyledImageBlock,
  StyledLink,
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
    <div>
      <StyledLink to={`/books/${book.isbn13}`}>
        <StyledImageBlock>
          <StyledImage src={book.image} alt={book.title} />
        </StyledImageBlock>
        <StyledBlock>
          <StyledTitle>{book.title}</StyledTitle>
          <StyledText>{book.isbn13}</StyledText>
          <StyledSubtitle>{book.subtitle}</StyledSubtitle>
          <StyledPrice>
            {book.price === "$0.00" ? "Free" : book.price}
          </StyledPrice>
        </StyledBlock>
      </StyledLink>
    </div>
  );
};
