import { IBookDetailsApi } from "../../types";
import { FavoriteItem } from "../FavoriteItem/FavoriteItem";

interface IProps {
  books: IBookDetailsApi[];
}
export const FavoriteList = ({ books }: IProps) => {
  return (
    <div>
      {books.map((book) => {
        return <FavoriteItem book={book}></FavoriteItem>;
      })}
    </div>
  );
};
