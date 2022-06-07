import { ReactNode, useEffect, useId, useState } from "react";
import { Link } from "react-scroll";
import { Heart, StarBlack, StarLight } from "../../assets";
import { useAppDispatch } from "../../store/hooks/hook";
import { addCards } from "../../store/slices/cardReducer";
import { addFavorites } from "../../store/slices/userReducer";
import { IBookDetailsApi } from "../../types";
import { Info } from "../Info/Info";
import { v4 as uuidv4 } from "uuid";
import { SliderComponent } from "../Slider/Slider";
// import { SliderComponent } from "../Slider/Slider";

import { Title } from "../Title/Title";
import {
  BookRating,
  HeartContainer,
  StyledArrowDown,
  StyledAttribute,
  StyledAttributeDetails,
  StyledBlock,
  StyledButton,
  StyledButtonContainer,
  StyledDetails,
  StyledImage,
  StyledImageBlock,
  StyledInfoContainer,
  StyledParams,
  StyledPrice,
  StyledTab,
  StyledTabPanel,
  StyledTabs,
} from "./style";

interface IProps {
  book: IBookDetailsApi;
}

export const DetailsBooks = ({ book }: IProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const id = useId();
  const drawRating = (rating: string): ReactNode[] => {
    const stars = [];
    let id = {};
    for (let i = 0; i <= 4; i++) {
      id = uuidv4();
      if (i < +rating) {
        stars.push(<StarBlack key={`${id}`} />);
      } else {
        stars.push(<StarLight key={`${id}`} />);
      }
    }
    return stars;
  };

  const [active, setActive] = useState<string>("description");

  // const id = useId();
  const dispatch = useAppDispatch();

  const keys: string[] = Object.keys(book);
  const forbidenKeys: string[] = [
    "desc",
    "error",
    "image",
    "isbn10",
    "isbn13",
    "pdf",
    "url",
  ];
  const filteredKeys = keys.filter((el) => !forbidenKeys.includes(el));

  const newArr = Object.assign(book);

  const handleDescription = () => {
    setActive("description");
  };
  const handleAuthors = () => {
    setActive("authors");
  };

  const handleFavorites = () => {
    dispatch(addFavorites(book));
  };
  const handleCards = () => {
    dispatch(
      addCards({
        ...book,
        amount: 1,
      })
    );
  };
  return (
    <>
      <Title> {book.title ? book.title : "No Title"}</Title>
      <StyledDetails>
        <StyledImageBlock>
          <StyledImage src={book.image} alt={book.title}></StyledImage>
        </StyledImageBlock>

        <StyledBlock>
          <StyledPrice>
            {book.price === "$0.00" ? "Free" : book.price}
          </StyledPrice>
          <BookRating>{drawRating(`${book.rating}`)}</BookRating>
          <StyledInfoContainer>
            <StyledParams>Author</StyledParams>
            <StyledAttribute>{book.authors}</StyledAttribute>
            <StyledParams>Publisher</StyledParams>
            <StyledAttribute>{book.publisher}</StyledAttribute>
            <StyledParams>Language</StyledParams>
            <StyledAttribute>{book.language}</StyledAttribute>
            <StyledParams>Pages</StyledParams>
            <StyledAttribute>{book.pages}</StyledAttribute>
            <StyledAttributeDetails>
              <Link to="details" duration={500} smooth={true}>
                More detailse
                <button>
                  <StyledArrowDown />
                </button>
              </Link>
            </StyledAttributeDetails>
            <StyledButtonContainer>
              <StyledButton onClick={handleCards}>Add to chart</StyledButton>
              <HeartContainer onClick={handleFavorites}>
                <Heart />
              </HeartContainer>
            </StyledButtonContainer>
          </StyledInfoContainer>
        </StyledBlock>
      </StyledDetails>
      <StyledTabs id="details">
        <StyledTab
          isActive={active === "description"}
          onClick={handleDescription}
        >
          Description
        </StyledTab>
        <StyledTab isActive={active === "authors"} onClick={handleAuthors}>
          Author
        </StyledTab>
      </StyledTabs>
      <StyledTabPanel>
        {active === "description"
          ? book.desc
          : active === "authors"
          ? book.authors
          : "Not Found"}
      </StyledTabPanel>

      <Info />
      {/* <SliderComponent /> */}
    </>
  );
};
