import { title } from "process";
import { Link } from "react-router-dom";

import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "../../assets";
import { routes } from "../../routes/routes";

import { StyledPaginationButton } from "./style";

interface IProps {
  booksPage: number;
  totalBooks: number;
}

export const Pagination = ({ booksPage, totalBooks }: IProps) => {
  const { page = "" } = useParams();
  const navigate = useNavigate();
  // const { books, total } = useAppSelector(getBooks);

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalBooks / booksPage); i++) {
    pageNumber.push(i);
  }
  // const [books, setBooksPage] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [booksPage, setBookPage] = useState(10);

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     setLoading(true);
  //     const res = await axios.get("https://api.itbook.store/1.0/search");
  //     setBooksPage(res.data);
  //     setLoading(false);
  //   };

  //   fetchBooks();
  // }, []);
  // console.log(books);

  // const indexOfLastBook = currentPage * booksPage;
  // const indexOfFirstBook = indexOfLastBook - booksPage;
  // const currentBook = books.slice(indexOfFirstBook, indexOfLastBook);

  const handleNextPage = () => {
    navigate(`/search/${title}/${Number(page) + 1}`);
  };
  const handlePrevPage = () => {
    if (Number(page) === 1) {
      return;
    }
    navigate(`/search/${title}/${Number(page) - 1}`);
  };
  return (
    <>
      <StyledPaginationButton type="button" onClick={handlePrevPage}>
        <ArrowLeft />
        Prev
      </StyledPaginationButton>
      <ul>
        {pageNumber.map((number) => {
          return (
            <li>
              <Link to={routes.SEARCH_BOOK_RESULT}>{number}</Link>
            </li>
          );
        })}
      </ul>
      <StyledPaginationButton type="button" onClick={handleNextPage}>
        Next
        <ArrowRight />
      </StyledPaginationButton>
    </>
  );
};
