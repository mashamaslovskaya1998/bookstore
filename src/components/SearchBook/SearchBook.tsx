import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookAPI } from "../../services/bookService";
import { ISearchBooksApi } from "../../types";
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
  const { title = "", page = "" } = useParams();
  const [searchResult, setSearchResult] = useState<ISearchBooksApi>();

  useEffect(() => {
    bookAPI.getBooksBySearch(title, page).then((books) => {
      setSearchResult(books);
    });
  }, [title, page]);
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
                <StyledPrice>{book.price}</StyledPrice>
              </StyledLink>
            </li>
          );
        })}
      </StyledSearchBooks>
    </div>
  );
};
