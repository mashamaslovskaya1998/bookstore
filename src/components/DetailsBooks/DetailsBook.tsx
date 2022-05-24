import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heart } from "../../assets";
import { bookAPI } from "../../services/bookService";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hook";
import { getFavorites } from "../../store/selector/favoriteSelector";
import { addCards } from "../../store/slices/cardReducer";
import { addFavorites } from "../../store/slices/favoritesReducer";
import { IBookDetailsApi } from "../../types";
// import { SliderComponent } from "../Slider/Slider";

import { Title } from "../Title/Title";
import {
  HeartContainer,
  StyledArrowDown,
  StyledAttribute,
  StyledBlock,
  StyledBlockButtons,
  StyledButton,
  StyledButtonContainer,
  StyledDescriptionButtons,
  StyledDetails,
  StyledImage,
  StyledImageBlock,
  StyledInfoContainer,
  StyledParams,
  StyledPrice,
} from "./style";

export const DetailsBooks = () => {
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
    <div>
      <Title> {detailsBook?.title ? detailsBook.title : "No Title"}</Title>
      <StyledDetails>
        <StyledImageBlock>
          <StyledImage
            src={detailsBook?.image}
            alt={detailsBook?.title}
          ></StyledImage>
        </StyledImageBlock>

        <StyledBlock>
          <StyledPrice>{detailsBook?.price}</StyledPrice>
          <StyledInfoContainer>
            <StyledParams>Author</StyledParams>
            <StyledAttribute>{detailsBook?.authors}</StyledAttribute>
            <StyledParams>Publisher</StyledParams>
            <StyledAttribute>{detailsBook?.publisher}</StyledAttribute>
            <StyledParams>Language</StyledParams>
            <StyledAttribute>{detailsBook?.language}</StyledAttribute>
            <StyledParams>Pages</StyledParams>
            <StyledAttribute>{detailsBook?.pages}</StyledAttribute>
            <StyledAttribute>
              More details
              <StyledArrowDown />
            </StyledAttribute>
            <StyledButtonContainer>
              <StyledButton onClick={handleCards}>Add to chart</StyledButton>
              <HeartContainer onClick={handleFavorites}>
                <Heart />
              </HeartContainer>
            </StyledButtonContainer>
          </StyledInfoContainer>
        </StyledBlock>
      </StyledDetails>
      <StyledBlockButtons>
        <StyledDescriptionButtons>Description</StyledDescriptionButtons>
        <StyledDescriptionButtons>Author</StyledDescriptionButtons>
        <StyledDescriptionButtons>Reviews</StyledDescriptionButtons>
      </StyledBlockButtons>
      <StyledAttribute>{detailsBook?.desc}</StyledAttribute>
      {/* <SliderComponent books={book} /> */}
    </div>
  );
};
