import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes/routes";
import { bookAPI } from "../services/bookService";

export const FavoritesBook = () => {
  console.log(bookAPI);
  return (
    <div>
      <Link to={routes.FAVORITEBOOKS}>Favorite Books</Link>
    </div>
  );
};
