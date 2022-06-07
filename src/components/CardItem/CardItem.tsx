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
        <StyledLink to={`${routes.CARD}/${book.isbn13}`}>
          <StyledImage src={book.image} alt={book.title} />
        </StyledLink>
        <DescriptionBlock>
          <StyledLink to={`${routes.CARD}/${book.isbn13}`}>
            <StyledTitle>{book.title}</StyledTitle>
            <StyledSubtitle>{book.subtitle}</StyledSubtitle>
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
        <StyledPrice>{book.price}</StyledPrice>

        <HeartContainer type="button" onClick={() => handleRemoveCard(book)}>
          <Cancel />
        </HeartContainer>
      </StyledContainerCard>
    </>
  );
};
