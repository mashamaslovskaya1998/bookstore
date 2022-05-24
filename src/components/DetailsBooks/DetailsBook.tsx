import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Heart } from "../../assets";
import { bookAPI } from "../../services/bookService";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hook";
import { getFavorites } from "../../store/selector/favoriteSelector";
import favoritesReducer, {
  addFavorites,
} from "../../store/slices/favoritesReducer";
import { RootState } from "../../store/store";
import { IBook, IBookDetailsApi, IFavorites } from "../../types";
import { SliderComponent } from "../Slider/Slider";

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
  const favorites = useAppSelector(getFavorites);
  const dispatch = useAppDispatch();

  const { id = "" } = useParams();
  const [detailsBook, setDetailsBook] = useState<IBookDetailsApi>();

  useEffect(() => {
    bookAPI.getBookDetails(id).then((book) => {
      setDetailsBook(book);
    });
  }, [id]);

  const handleFavorites = (book: IBook) => {
    dispatch(addFavorites(book));
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
          <HeartContainer>
            <Heart />
          </HeartContainer>
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
              <StyledButton onClick={() => handleFavorites(book)}>
                Add to chart
              </StyledButton>
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
      {/* <SliderComponent /> */}
    </div>
  );
};
