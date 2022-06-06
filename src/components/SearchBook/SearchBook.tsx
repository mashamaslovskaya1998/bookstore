import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { bookAPI } from "../../services/bookService";
import { ISearchBooksApi } from "../../types";
import { Pagination } from "../Pagination/Pagination";
import { Title } from "../Title/Title";
import {
  StyledImage,
  StyledIsbn,
  StyledLink,
  StyledPrice,
  StyledSearchBooks,
  StyledSubtitle,
  StyledText,
  StyledTitle,
} from "./style";

export const SearchBookResult = () => {
  // const initialBooks: IBooks = {
  //   response: null,
  //   results: [],
  //   totalResults: 0,
  //   currentPage: 1,
  //   totalPages: 0,
  // };

  // const defaultRequestParams : ISearchBooksApi ={
  //   books: "JavaScript",
  // error: string;
  // total: "",
  // page: 1
  // }

  const { title = "", page = "" } = useParams();
  const [searchResult, setSearchResult] = useState<ISearchBooksApi>();

  const [books, setBooks] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPage] = useState(10);

  useEffect(() => {
    bookAPI.getBooksBySearch(title, page).then((books) => {
      setSearchResult(books);
    });
  }, [title, page]);

  const indexOfLastBook = currentPage * booksPage;
  const indexOfFirstBook = indexOfLastBook - booksPage;
  const currentBook = books.slice(indexOfFirstBook, indexOfLastBook);
  return (
    <div>
      <Title>Search Result</Title>
      <StyledText>Found {searchResult?.total} books</StyledText>
      <StyledSearchBooks>
        {searchResult?.books.map((book) => {
          return (
            <li key={book.isbn13}>
              <StyledLink to={`/books/${book.isbn13}`}>
                <StyledImage src={book.image} alt={book.title} />
                <StyledTitle>{book.title}</StyledTitle>
                <StyledIsbn>{book.isbn13}</StyledIsbn>
                <StyledSubtitle>{book.subtitle}</StyledSubtitle>
                <StyledPrice>
                  {book.price === "$0.00" ? "Free" : book.price}
                </StyledPrice>
              </StyledLink>
            </li>
          );
        })}
      </StyledSearchBooks>
      <Pagination booksPage={booksPage} totalBooks={books.length} />
    </div>
  );
};
