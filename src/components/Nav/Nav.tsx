import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, User } from "../../assets";
import { routes } from "../../routes/routes";
import { StyledNav } from "./style";
export const Nav = () => {
  return (
    <StyledNav>
      <Link to={routes.favoritebook}>
        <Heart />
      </Link>
      <Link to={routes.card}>
        <ShoppingBag />
      </Link>
      <Link to={routes.user}>
        <User />
      </Link>
    </StyledNav>
  );
};
