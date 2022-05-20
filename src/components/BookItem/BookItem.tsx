import { IBook } from "../../types/books";
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
const BookItem = ({ book }: IBookItemProps) => {
  return (
    <StyledLink to={`/books/${book.isbn13}`}>
      <StyledImageBlock>
        <StyledImage src={book.image} alt={book.title} />
      </StyledImageBlock>
      <StyledBlock>
        <StyledTitle>{book.title}</StyledTitle>
        <StyledText>{book.isbn13}</StyledText>
        <StyledSubtitle>{book.subtitle}</StyledSubtitle>
        <StyledPrice>{book.price}</StyledPrice>
      </StyledBlock>
    </StyledLink>
  );
};

export default BookItem;
