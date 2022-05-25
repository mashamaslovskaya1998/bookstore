import { Route, Routes } from "react-router";
import { MainTemplate } from "../components/MainTemplate";
import { Search } from "../components/Search/Search";
import { DetailsBooks } from "../components/DetailsBooks/DetailsBook";
import { Cards } from "../pages/Cards";
import { FavoritesBook } from "../pages/FavoritesBook";
import Login from "../pages/Login";
import { NewBook } from "../pages/NewBook";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import { SearchBookResult } from "../components/SearchBook/SearchBook";
import { User } from "../pages/User";
import { routes } from "../routes/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainTemplate />}>
        {/* <Route index element={<Home />} /> */}
        <Route path={routes.newbook} element={<NewBook />} />
        <Route path={routes.search} element={<Search />} />
        <Route
          path={routes.search_book_results}
          element={<SearchBookResult />}
        />
        <Route path={routes.details_book} element={<DetailsBooks />} />
        <Route path={routes.favoritebook} element={<FavoritesBook />} />
        <Route path={routes.card} element={<Cards />} />
      </Route>
      <Route path={routes.user} element={<User />} />
      <Route path={routes.sign_in} element={<Login />} />
      <Route path={routes.sign_up} element={<Register />} />
      {/* <Route path={routes.not_found} element={<NotFound />} /> */}
    </Routes>
  );
};
