import { useSelector } from "react-redux";
import { BackButton } from "../components/BackButton/BackButton";
import { CardList } from "../components/CardList/CardList";
import { Title } from "../components/Title/Title";
import { useAppSelector } from "../store/hooks/hook";
import { getCards } from "../store/selector/cardsSelector";
import { RootState } from "../store/store";

export const Cards = () => {
  const { isAuth } = useSelector(({ user }: RootState) => user);
  const { cards } = useAppSelector(getCards);
  return (
    <div>
      <BackButton />
      <Title>Your cart</Title>
      <CardList books={cards}></CardList>
    </div>
  );
};
