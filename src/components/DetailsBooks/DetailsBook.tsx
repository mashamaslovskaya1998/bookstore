import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookAPI } from "../../services/bookService";
import { IBookDetailsApi } from "../../types/books";
import { Title } from "../Title/Title";
import {
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
  const { id = "" } = useParams();
  const [detailsBook, setDetailsBook] = useState<IBookDetailsApi>();

  useEffect(() => {
    bookAPI.getBookDetails(id).then((book) => {
      setDetailsBook(book);
    });
  }, [id]);

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
            <StyledParams>Format</StyledParams>
            <StyledAttribute>{detailsBook?.pages}</StyledAttribute>
            <StyledAttribute>
              More details
              <StyledArrowDown />
            </StyledAttribute>
            <StyledButtonContainer>
              <StyledButton>Add ro chart</StyledButton>
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
    </div>
  );
};
