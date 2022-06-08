import { Cancel, Minus, Plus } from "../../assets";
import { routes } from "../../routes/routes";
import { useAppDispatch } from "../../store/hooks/hook";
import {
  decreaseAmount,
  increaseAmount,
  removeCard,
} from "../../store/slices/cardReducer";
import { IBookCard } from "../../types";
import {
  AmountContainer,
  Button,
  Count,
  DescriptionBlock,
  HeartContainer,
  StyledContainerCard,
  StyledImage,
  StyledImageBlock,
  StyledLink,
  StyledPrice,
  StyledSubtitle,
  StyledTitle,
} from "./style";

interface IBookCardProps {
  book: IBookCard;
}

export const CardItem = ({ book }: IBookCardProps) => {
  const dispatch = useAppDispatch();
  const handleRemoveCard = (book: IBookCard) => {
    dispatch(removeCard(book));
  };
  const handlePlus = (book: IBookCard) => {
    dispatch(increaseAmount(book));
  };

  const handleMinus = (book: IBookCard) => {
    if (book.amount > 1) {
      dispatch(decreaseAmount(book));
    }
  };

  return (
    <>
      <StyledContainerCard>
        <StyledLink to={`/bookstore/books/${book.isbn13}`}>
          <StyledImageBlock>
            <StyledImage src={book.image} alt={book.title} />
          </StyledImageBlock>
        </StyledLink>
        <DescriptionBlock>
          <StyledLink to={`/bookstore/books/${book.isbn13}`}>
            <StyledTitle>{book.title ? book.title : "No title"}</StyledTitle>
            <StyledSubtitle>
              {book.subtitle ? book.subtitle : "No subtitle"}
            </StyledSubtitle>
          </StyledLink>
          <AmountContainer>
            <Button>
              <Minus onClick={() => handleMinus(book)} />
            </Button>
            <Count>{book.amount}</Count>
            <Button>
              <Plus onClick={() => handlePlus(book)} />
            </Button>
          </AmountContainer>
        </DescriptionBlock>

        <StyledPrice>
          {book.price === "$0.00" ? "Free" : book.price}
        </StyledPrice>

        <HeartContainer type="button" onClick={() => handleRemoveCard(book)}>
          <Cancel />
        </HeartContainer>
      </StyledContainerCard>
    </>
  );
};
