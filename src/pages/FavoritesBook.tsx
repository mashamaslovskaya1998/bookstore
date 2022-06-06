import { BackButton } from "../components/BackButton/BackButton";
import { FavoriteList } from "../components/FavoriteList/FavoriteList";
import { Title } from "../components/Title/Title";

export const FavoritesBook = () => {
  return (
    <div>
      <BackButton />
      <Title>Favorites</Title>
      <FavoriteList></FavoriteList>
    </div>
  );
};
