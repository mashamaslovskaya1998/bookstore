import { StyledBooksList } from "./style";
import BookItem from "../BookItem/BookItem";
import { IBook } from "../../types/books";

interface IBookListProps {
  books: IBook[];
}
const BookList = ({ books }: IBookListProps) => {
  return (
    <StyledBooksList>
      {books.map((book) => {
        return <BookItem key={book.isbn13} book={book} />;
      })}
    </StyledBooksList>
  );
};

export default BookList;
