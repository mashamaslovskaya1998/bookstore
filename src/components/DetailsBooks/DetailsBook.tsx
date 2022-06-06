import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heart } from "../../assets";
import { bookAPI } from "../../services/bookService";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hook";
import { getFavorites } from "../../store/selector/favoriteSelector";
import { addCards } from "../../store/slices/cardReducer";
import { addFavorites } from "../../store/slices/favoritesReducer";
import { IBookDetailsApi, INewBooksApi } from "../../types";
import { BackButton } from "../BackButton/BackButton";
import { Info } from "../Info/Info";
import { SliderComponent } from "../Slider/Slider";

import { Title } from "../Title/Title";
import {
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
  StyledPreviewBook,
  StyledPrice,
  StyledTab,
  StyledTabPanel,
  StyledTabs,
} from "./style";

export const DetailsBooks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const initialBookDetails: IBookDetailsApi = {
    authors: "",
    desc: "",
    error: "",
    image: "",
    isbn10: "",
    isbn13: "",
    language: "",
    pages: "",
    pdf: {},
    price: "",
    publisher: "",
    rating: "",
    subtitle: "",
    title: "",
    url: "",
    year: "",
  };
  const [active, setActive] = useState<string>("description");

  const favorites = useAppSelector(getFavorites);
  const dispatch = useAppDispatch();

  const { id = "" } = useParams();
  const [detailsBook, setDetailsBook] =
    useState<IBookDetailsApi>(initialBookDetails);

  useEffect(() => {
    bookAPI.getBookDetails(id).then((book) => {
      setDetailsBook(book);
    });
  }, [id]);

  const [newBooks, setNewBooks] = useState<INewBooksApi>({
    books: [],
    error: "",
    total: "",
  });
  const handleDescription = () => {
    setActive("description");
  };
  const handleAuthors = () => {
    setActive("authors");
  };

  useEffect(() => {
    bookAPI.getNewBooks().then((books) => {
      setNewBooks(books);
    });
  }, []);
  const handleFavorites = () => {
    dispatch(
      addFavorites({
        title: detailsBook?.title,
        subtitle: detailsBook?.subtitle,
        price: detailsBook?.price,
        image: detailsBook?.image,
        isbn13: detailsBook?.isbn13,
        url: detailsBook?.url,
      })
    );
  };
  const handleCards = () => {
    dispatch(
      addCards({
        title: detailsBook?.title,
        subtitle: detailsBook?.subtitle,
        price: detailsBook?.price,
        image: detailsBook?.image,
        isbn13: detailsBook?.isbn13,
        url: detailsBook?.url,
      })
    );
  };
  return (
    <>
      <BackButton />
      <Title> {detailsBook?.title ? detailsBook.title : "No Title"}</Title>
      <StyledDetails>
        <StyledImageBlock>
          <StyledImage
            src={detailsBook?.image}
            alt={detailsBook?.title}
          ></StyledImage>
        </StyledImageBlock>

        <StyledBlock>
          <StyledPrice>
            {detailsBook?.price === "$0.00" ? "Free" : detailsBook?.price}
          </StyledPrice>
          <StyledInfoContainer>
            <StyledParams>Author</StyledParams>
            <StyledAttribute>{detailsBook?.authors}</StyledAttribute>
            <StyledParams>Publisher</StyledParams>
            <StyledAttribute>{detailsBook?.publisher}</StyledAttribute>
            <StyledParams>Language</StyledParams>
            <StyledAttribute>{detailsBook?.language}</StyledAttribute>
            <StyledParams>Pages</StyledParams>
            <StyledAttribute>{detailsBook?.pages}</StyledAttribute>
            <StyledAttributeDetails>
              More details
              <button>
                <StyledArrowDown />
              </button>
            </StyledAttributeDetails>
            <StyledButtonContainer>
              <StyledButton onClick={handleCards}>Add to chart</StyledButton>
              <HeartContainer onClick={handleFavorites}>
                <Heart />
              </HeartContainer>
            </StyledButtonContainer>
            <StyledPreviewBook>Preview book</StyledPreviewBook>
          </StyledInfoContainer>
        </StyledBlock>
      </StyledDetails>
      <StyledTabs>
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
          ? detailsBook.desc
          : active === "authors"
          ? detailsBook.authors
          : "Not Found"}
      </StyledTabPanel>

      <Info />
      <div>
        <SliderComponent books={newBooks.books} />
      </div>
    </>
  );
};
