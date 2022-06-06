import { BackButton } from "../components/BackButton/BackButton";
import { CardList } from "../components/CardList/CardList";
import { Title } from "../components/Title/Title";

export const Cards = () => {
  return (
    <div>
      <BackButton />
      <Title>Your cart</Title>
      <CardList></CardList>
    </div>
  );
};
