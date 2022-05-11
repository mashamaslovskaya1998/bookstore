import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import { routes } from "../routes/routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.SIGN_IN} element={<Login />} />
      <Route path={routes.SIGN_UP} element={<Register />} />
      <Route path={routes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
