import { StyledBooksList } from "./style";
import { IBook } from "../../types/Books";
import BookItem from "../BookItem/BookItem";

interface IBookListProps {
  books: IBook[];
}
const BookList = ({ books }: IBookListProps) => {
  return (
    <StyledBooksList>
      {books.map((book, index) => {
        return <BookItem key={book.isbn13} book={book} />;
      })}
    </StyledBooksList>
  );
};

export default BookList;
