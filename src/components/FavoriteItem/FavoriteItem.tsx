import { Heart } from "../../assets";
import { routes } from "../../routes/routes";
import { useAppDispatch } from "../../store/hooks/hook";
import { removeFavorites } from "../../store/slices/userReducer";
import { IBook, IBookDetailsApi } from "../../types";
import {
  HeartContainer,
  StyledBlock,
  StyledContainerFavorites,
  StyledImage,
  StyledImageBlock,
  StyledLink,
  StyledPrice,
  StyledSubtitle,
  StyledTitle,
} from "./style";

interface IBookItemProps {
  book: IBookDetailsApi;
}

export const FavoriteItem = ({ book }: IBookItemProps) => {
  const dispatch = useAppDispatch();
  const handleRemoveFavorites = (book: IBook) => {
    dispatch(removeFavorites(book));
  };
  return (
    <StyledContainerFavorites>
      <StyledLink to={`/bookstore/books/${book.isbn13}`}>
        <StyledImageBlock>
          <StyledImage src={book.image} alt={book.title} />
        </StyledImageBlock>
        <StyledBlock>
          <StyledTitle>{book.title ? book.title : "No title"}</StyledTitle>
          <StyledSubtitle>
            {book.subtitle ? book.subtitle : "No subtitle"}
          </StyledSubtitle>
          <StyledPrice>
            {book.price === "$0.00" ? "Free" : book.price}
          </StyledPrice>
        </StyledBlock>
      </StyledLink>
      <HeartContainer type="button" onClick={() => handleRemoveFavorites(book)}>
        <Heart />
      </HeartContainer>
    </StyledContainerFavorites>
  );
};
