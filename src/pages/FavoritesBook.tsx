import { useSelector } from "react-redux";
import { BackButton } from "../components/BackButton/BackButton";
import { FavoriteList } from "../components/FavoriteList/FavoriteList";
import { Title } from "../components/Title/Title";
import { useAppSelector } from "../store/hooks/hook";
import { getUser } from "../store/selector/userSelector";
import { RootState } from "../store/store";

export const FavoritesBook = () => {
  const { isAuth } = useSelector(({ user }: RootState) => user);
  const { favorites } = useAppSelector(getUser);
  return (
    <div>
      <BackButton />
      <Title>Favorites</Title>
      <FavoriteList books={favorites} />
    </div>
  );
};
