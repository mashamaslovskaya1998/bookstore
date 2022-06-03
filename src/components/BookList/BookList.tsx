import {
  StyledBooksList,
  StyledPaginationButton,
  StyledPaginationContainer,
} from "./style";
import { IBook, ISearchBooksApi } from "../../types/index";
import { Info } from "../Info/Info";
import { BookItem } from "../BookItem/BookItem";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bookAPI } from "../../services/bookService";
import { ArrowLeft, ArrowRight } from "../../assets";
import { routes } from "../../routes/routes";

interface IBookListProps {
  books: IBook[];
}
const BookList = ({ books }: IBookListProps) => {
  const { title = "", page = "" } = useParams();
  const [newBookResult, setNewBookResult] = useState<ISearchBooksApi>();
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate(`${routes.NEWBOOK}/${title}/${Number(page) + 1}`);
  };
  const handlePrevPage = () => {
    if (Number(page) === 1) {
      return;
    }
    navigate(`${routes.NEWBOOK}/${title}/${Number(page) - 1}`);
  };
  useEffect(() => {
    bookAPI.getBooksByNewBook(title, page).then((books) => {
      setNewBookResult(books);
    });
  }, [title, page]);
  return (
    <div>
      <StyledBooksList>
        {books.map((book) => {
          return <BookItem key={book.isbn13} book={book} />;
        })}
      </StyledBooksList>
      <StyledPaginationContainer>
        <div>
          <StyledPaginationButton type="button" onClick={handlePrevPage}>
            <ArrowLeft />
            Prev
          </StyledPaginationButton>
        </div>
        <div>
          <StyledPaginationButton type="button" onClick={handleNextPage}>
            Next
            <ArrowRight />
          </StyledPaginationButton>
        </div>
      </StyledPaginationContainer>
      <Info />
    </div>
  );
};

export default BookList;
