// import { useAppSelector } from "../../store/hooks/hook";
// import { getFavorites } from "../../store/selector/favoriteSelector";
import { IFavorites } from "../../types";
import { FavoriteItem } from "../FavoriteItem/FavoriteItem";

interface IBookListProps {
  books: IBook[];
}

export const FavoriteList = ({ books }: IBookListProps) => {
  return (
    <div>
      {books.map((book) => {
        return <FavoriteItem book={book}></FavoriteItem>;
      })}
    </div>
  );
};
