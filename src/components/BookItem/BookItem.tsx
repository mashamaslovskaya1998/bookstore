import { IBook } from "../../types/books";
import {
  StyledImage,
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
      <StyledImage src={book.image} alt={book.title} />

      <StyledTitle>{book.title}</StyledTitle>
      <StyledText>{book.isbn13}</StyledText>
      <StyledSubtitle>{book.subtitle}</StyledSubtitle>
      <StyledPrice>{book.price}</StyledPrice>
    </StyledLink>
  );
};

export default BookItem;
