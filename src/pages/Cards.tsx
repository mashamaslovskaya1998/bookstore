import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { BackButton } from "../components/BackButton/BackButton";
import { CardList } from "../components/CardList/CardList";
import { Title } from "../components/Title/Title";
import { routes } from "../routes/routes";
import { useAppSelector } from "../store/hooks/hook";
import { getCards } from "../store/selector/cardsSelector";
import { RootState } from "../store/store";

export const Cards = () => {
  const { isAuth } = useSelector(({ user }: RootState) => user);
  const { cards } = useAppSelector(getCards);
  if (isAuth) {
    return (
      <div>
        <BackButton />
        <Title>Your cart</Title>
        <CardList books={cards}></CardList>
      </div>
    );
  }
  return <Navigate to={routes.SIGN_IN} />;
};
