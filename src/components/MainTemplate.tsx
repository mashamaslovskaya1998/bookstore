import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export const MainTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
