import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { bookAPI } from "../../services/bookService";
import { ISearchBooksApi } from "../../types/books";
import { StyledSearchBooks } from "./style";

export const SearchBookResult = () => {
  const { title = "", page = "" } = useParams();
  const [searchResult, setSearchResult] = useState<ISearchBooksApi>();

  useEffect(() => {
    bookAPI.getBooksBySearch(title, page).then((books) => {
      setSearchResult(books);
    });
  }, [title, page]);
  return (
    <div>
      <h1>Search Result</h1>
      <p>Found {searchResult?.total} books</p>
      <StyledSearchBooks>
        {searchResult?.books.map((book) => {
          return (
            <li key={book.isbn13}>
              <Link to={`/books/${book.isbn13}`}>
                <img src={book.image} alt={book.title} />
                <h2>{book.title}</h2>
                <p>{book.isbn13}</p>
                <p>{book.subtitle}</p>
                <p>{book.price}</p>
              </Link>
            </li>
          );
        })}
      </StyledSearchBooks>
    </div>
  );
};
