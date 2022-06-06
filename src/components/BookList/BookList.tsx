import { StyledBooksList } from "./style";
import { IBook, ISearchBooksApi } from "../../types/index";
import { Info } from "../Info/Info";
import { BookItem } from "../BookItem/BookItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookAPI } from "../../services/bookService";

interface IBookListProps {
  books: IBook[];
}
const BookList = ({ books }: IBookListProps) => {
  const { title = "", page = "" } = useParams();
  const [newBookResult, setNewBookResult] = useState<ISearchBooksApi>();

  useEffect(() => {
    bookAPI.getBooksByNewBook(title, page).then((books) => {
      setNewBookResult(books);
    });
  }, [title, page]);
  return (
    <>
      <StyledBooksList>
        {books.map((book) => {
          return <BookItem key={book.isbn13} book={book} />;
        })}
      </StyledBooksList>

      <Info />
    </>
  );
};

export default BookList;
