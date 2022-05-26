import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, User } from "../../assets";
import { routes } from "../../routes/routes";
import { StyledNav } from "./style";
export const Nav = () => {
  return (
    <StyledNav>
      <Link to={routes.FAVORITE_BOOK}>
        <Heart />
      </Link>
      <Link to={routes.CARD}>
        <ShoppingBag />
      </Link>
      <Link to={routes.USER}>
        <User />
      </Link>
    </StyledNav>
  );
};
