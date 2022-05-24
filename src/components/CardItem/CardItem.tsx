import { useState } from "react";
import { Cancel } from "../../assets";
import { routes } from "../../routes/routes";
import { IBook } from "../../types";
import {
  HeartContainer,
  StyledBlock,
  StyledCountButton,
  StyledCountContainer,
  StyledImage,
  StyledImageBlock,
  StyledLink,
  StyledPrice,
  StyledSubtitle,
  StyledTitle,
} from "./style";

interface IBookItemProps {
  book: IBook;
}

export const CardItem = ({ book }: IBookItemProps) => {
  const [count, setCount] = useState(1);
  const handleButtonMin = () => {
    setCount(count - 1);
  };
  const handleButtonPlus = () => {
    setCount(count + 1);
  };
  return (
    <StyledLink to={`${routes.card}/${book.isbn13}`}>
      <StyledImageBlock>
        <StyledImage src={book.image} alt={book.title} />
      </StyledImageBlock>
      <StyledBlock>
        <StyledTitle>{book.title}</StyledTitle>
        <StyledSubtitle>{book.subtitle}</StyledSubtitle>
        <StyledCountContainer>
          <StyledCountButton type="button" onClick={handleButtonMin}>
            -
          </StyledCountButton>

          <StyledCountButton type="button" onClick={handleButtonPlus}>
            +
          </StyledCountButton>
        </StyledCountContainer>
      </StyledBlock>
      <StyledBlock>
        <StyledPrice>{book.price}</StyledPrice>
      </StyledBlock>
      <HeartContainer>
        <Cancel />
      </HeartContainer>
    </StyledLink>
  );
};
