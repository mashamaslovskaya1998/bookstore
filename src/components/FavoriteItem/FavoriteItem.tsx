import { Heart } from "../../assets";
import { routes } from "../../routes/routes";
import { IBook } from "../../types";
import {
  HeartContainer,
  StyledBlock,
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

export const FavoriteItem = ({ book }: IBookItemProps) => {
  return (
    <StyledLink to={`${routes.favoritebook}/${book.isbn13}`}>
      <StyledImageBlock>
        <StyledImage src={book.image} alt={book.title} />
      </StyledImageBlock>
      <StyledBlock>
        <StyledTitle>{book.title}</StyledTitle>
        <StyledSubtitle>{book.subtitle}</StyledSubtitle>
        <StyledPrice>{book.price}</StyledPrice>
      </StyledBlock>
      <HeartContainer>
        <Heart />
      </HeartContainer>
    </StyledLink>
  );
};
