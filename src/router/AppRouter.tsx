import { Route, Routes } from "react-router";
import { MainTemplate } from "../components/MainTemplate";
import { Search } from "../components/Search/Search";
import { Bag } from "../pages/Bag";
import { DetailsBooks } from "../components/DetailsBooks/DetailsBook";
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
        <Route path="/" element={<NewBook />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:title/:page" element={<SearchBookResult />} />
        <Route path="/books/:id" element={<DetailsBooks />} />
      </Route>
      <Route path={routes.FAVORITEBOOKS} element={<FavoritesBook />} />
      <Route path={routes.BAG} element={<Bag />} />
      <Route path={routes.USER} element={<User />} />
      <Route path={routes.SIGN_IN} element={<Login />} />
      <Route path={routes.SIGN_UP} element={<Register />} />
      <Route path={routes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};
