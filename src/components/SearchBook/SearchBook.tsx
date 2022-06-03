import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "../../assets";
import { bookAPI } from "../../services/bookService";
import { IBooks, ISearchBooksApi } from "../../types";
import { Title } from "../Title/Title";
import {
  StyledImage,
  StyledIsbn,
  StyledLink,
  StyledPaginationButton,
  StyledPaginationContainer,
  StyledPrice,
  StyledSearchBooks,
  StyledSubtitle,
  StyledText,
  StyledTitle,
} from "./style";

export const SearchBookResult = () => {
  const initialBooks: IBooks = {
    response: null,
    results: [],
    totalResults: 0,
    currentPage: 1,
    totalPages: 0,
  };

  // const defaultRequestParams : ISearchBooksApi ={
  //   books: "JavaScript",
  // error: string;
  // total: "",
  // page: 1
  // }
  const { title = "", page = "" } = useParams();
  const [searchResult, setSearchResult] = useState<ISearchBooksApi>();
  const navigate = useNavigate();

  // const[books, setBooks] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [currentPage, setCurrentPage] = useState(1)
  // const [booksPage] =useState(10)

  const handleNextPage = () => {
    navigate(`/search/${title}/${Number(page) + 1}`);
  };
  const handlePrevPage = () => {
    if (Number(page) === 1) {
      return;
    }
    navigate(`/search/${title}/${Number(page) - 1}`);
  };
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
                <StyledPrice>
                  {book.price === "$0.00" ? "Free" : book.price}
                </StyledPrice>
              </StyledLink>
            </li>
          );
        })}
      </StyledSearchBooks>
      <StyledPaginationContainer>
        <div>
          <StyledPaginationButton type="button" onClick={handlePrevPage}>
            <ArrowLeft />
            Prev
          </StyledPaginationButton>
          {/* {Array.from({ length: BookList.totalPages }).map((_, i) => { */}
          return (
          <div>
            <button>{/* {i + 1} */}</button>
          </div>
          );
          {/* })} */}
        </div>
        <div>
          <StyledPaginationButton type="button" onClick={handleNextPage}>
            Next
            <ArrowRight />
          </StyledPaginationButton>
        </div>
      </StyledPaginationContainer>
    </div>
  );
};
