import { IBook } from "../../types/Books";
import { StyledBookItem } from "./style";

interface IBookItemProps {
  book: IBook;
}
const BookItem = ({ book }: IBookItemProps) => {
  return (
    <StyledBookItem>
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.isbn13}</p>
      <p>{book.subtitle}</p>
      <p>{book.price}</p>
    </StyledBookItem>
  );
};

export default BookItem;
