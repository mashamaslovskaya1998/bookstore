import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/hook";
import { getBooks } from "../../store/selector/booksSelector";

import {
  CurrentPage,
  Page,
  PageRight,
  Pages,
  StyledArrowLeft,
  StyledArrowRight,
  StyledPaginationButton,
  StyledPaginationContainer,
} from "./style";

// interface IProps {
//   booksPage: number;
//   totalBooks: any;
// }

export const Pagination = () => {
  // const pageNumber = [];
  const { page = "", title = "" } = useParams();
  const navigate = useNavigate();
  const { books, total } = useAppSelector(getBooks);

  // for (let i = 1; i <= Math.ceil(totalBooks / booksPage); i++) {
  //   pageNumber.push(i);
  // }

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

  const handleNextPage = () => {
    navigate(`/search/${title}/${Number(page) + 1}`);
  };
  const handlePrevPage = () => {
    if (Number(page) === 1) {
      return;
    }
    navigate(`/search/${title}/${Number(page) - 1}`);
  };

  const handleNextButton = () => {
    navigate(`/search/${title}/${Number(page) + 1}`);
    window.scrollTo(0, 0);
  };

  const handlePrevButton = () => {
    if (+page > 1) {
      navigate(`/search/${title}/${Number(page) - 1}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <StyledPaginationContainer>
      <StyledPaginationButton type="button" onClick={handlePrevPage}>
        <StyledArrowLeft />
        Prev
      </StyledPaginationButton>

      <Pages>
        <PageRight onClick={handlePrevButton}>
          {+page > 1 ? +page - 1 : ""}
        </PageRight>
        <CurrentPage>{page}</CurrentPage>
        <PageRight onClick={handleNextButton}>
          {total && +page < Math.ceil(+total) / 10 ? +page + 1 : +page + 1}
        </PageRight>
      </Pages>
      <StyledPaginationButton type="button" onClick={handleNextPage}>
        Next
        <StyledArrowRight />
      </StyledPaginationButton>
    </StyledPaginationContainer>
  );
};
