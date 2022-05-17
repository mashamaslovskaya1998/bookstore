import React from "react";
import { Link } from "react-router-dom";
import Heart from "../../assets/Heart.svg";
import ShoppingBag from "../../assets/ShoppingBag.svg";
import User from "../../assets/User.svg";
import { routes } from "../../routes/routes";
import { StyledImg, StyledNav } from "./style";
export const Nav = () => {
  return (
    <StyledNav>
      <Link to={routes.FAVORITEBOOKS}>
        <StyledImg src={Heart} alt="Heart" />
      </Link>
      <Link to={routes.BAG}>
        <StyledImg src={ShoppingBag} alt="ShoppingBag" />
      </Link>
      <Link to={routes.USER}>
        <StyledImg src={User} alt="User" />
      </Link>
    </StyledNav>
  );
};
