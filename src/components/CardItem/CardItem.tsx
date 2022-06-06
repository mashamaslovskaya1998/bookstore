import { Cancel } from "../../assets";
import { routes } from "../../routes/routes";
import { useAppDispatch } from "../../store/hooks/hook";
import { removeCard } from "../../store/slices/cardReducer";
import { IBook } from "../../types";
import {
  HeartContainer,
  StyledBlock,
  StyledContainerCard,
  StyledImage,
  StyledImageBlock,
  StyledLink,
  StyledPrice,
  StyledSubtitle,
  StyledTitle,
} from "./style";

interface IBookCardProps {
  book: IBook;
}

export const CardItem = ({ book }: IBookCardProps) => {
  const dispatch = useAppDispatch();
  const handleRemoveCard = (book: IBook) => {
    dispatch(removeCard(book));
  };
  // const [count, setCount] = useState(1);
  // const handleButtonMin = () => {
  //   setCount(count - 1);
  // };
  // const handleButtonPlus = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      <StyledContainerCard>
        <StyledLink to={`${routes.CARD}/${book.isbn13}`}>
          <StyledImageBlock>
            <StyledImage src={book.image} alt={book.title} />
          </StyledImageBlock>
          <StyledBlock>
            <StyledTitle>{book.title}</StyledTitle>
            <StyledSubtitle>{book.subtitle}</StyledSubtitle>
          </StyledBlock>
        </StyledLink>

        <StyledBlock>
          <StyledPrice>{book.price}</StyledPrice>
        </StyledBlock>
        <HeartContainer type="button" onClick={() => handleRemoveCard(book)}>
          <Cancel />
        </HeartContainer>
        {/* <StyledCountContainer>
        <StyledCountButton type="button" onClick={() => handleButtonMin}>
          -
        </StyledCountButton>

        <StyledCountButton type="button" onClick={() => handleButtonPlus}>
          +
        </StyledCountButton>
      </StyledCountContainer> */}
      </StyledContainerCard>
      <div>
        <p>Sum total</p>
        <p>VAT</p>
        <h3>Total: </h3>
        <button>Check out</button>
      </div>
    </div>
  );
};
