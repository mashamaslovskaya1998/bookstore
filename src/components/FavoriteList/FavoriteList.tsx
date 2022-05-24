import { useAppSelector } from "../../store/hooks/hook";
import { getFavorites } from "../../store/selector/favoriteSelector";
import { FavoriteItem } from "../FavoriteItem/FavoriteItem";

export const FavoriteList = () => {
  const { favorites } = useAppSelector(getFavorites);
  return (
    <div>
      {favorites.map((book) => {
        return <FavoriteItem book={book}></FavoriteItem>;
      })}
    </div>
  );
};
