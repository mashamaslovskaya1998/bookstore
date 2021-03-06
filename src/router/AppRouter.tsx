import { Route, Routes } from "react-router";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { Search } from "../components/Search/Search";
import { DetailsBook } from "../pages/DetailsBook";
import { Cards } from "../pages/Cards";
import { FavoritesBook } from "../pages/FavoritesBook";
import Login from "../pages/SignIn";
import { NewBook } from "../pages/NewBook";
import NotFound from "../pages/NotFound";
import Register from "../pages/SignUp";
import { SearchBookResult } from "../components/SearchBook/SearchBook";
import { User } from "../pages/User";
import { routes } from "../routes/routes";
// import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/bookstore" element={<MainTemplate />}>
        {/* <Route index element={<Home />} /> */}
        <Route path={routes.NEWBOOK} element={<NewBook />} />
        <Route path={routes.SEARCH} element={<Search />} />
        <Route
          path={routes.SEARCH_BOOK_RESULT}
          element={<SearchBookResult />}
        />
        <Route path={routes.DETAILS_BOOK} element={<DetailsBook />} />
        <Route path={routes.FAVORITE_BOOK} element={<FavoritesBook />} />
        <Route path={routes.CARD} element={<Cards />} />
        <Route path={routes.USER} element={<User />} />
        <Route path={routes.SIGN_IN} element={<Login />} />
        <Route path={routes.SIGN_UP} element={<Register />} />
        <Route path={routes.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
};
