import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Point,
  RedBag,
  RedFavorites,
  ShoppingBag,
  User,
} from "../../assets";
import { routes } from "../../routes/routes";
import { useAppSelector } from "../../store/hooks/hook";
import { getCards } from "../../store/selector/cardsSelector";
import { getUser } from "../../store/selector/userSelector";
import { StyledCartCircle, StyledNav, StyledPoint } from "./style";
export const Nav = () => {
  const { favorites } = useAppSelector(getUser);
  const { cards } = useAppSelector(getCards);
  return (
    <StyledNav>
      <Link to={routes.FAVORITE_BOOK}>
        <Heart />
        {favorites.length !== 0 ? (
          <StyledCartCircle>
            <StyledPoint />
          </StyledCartCircle>
        ) : (
          <></>
        )}
      </Link>
      <Link to={routes.CARD}>
        <ShoppingBag />
        {cards.length !== 0 ? (
          <StyledCartCircle>
            <StyledPoint />{" "}
          </StyledCartCircle>
        ) : (
          <></>
        )}
      </Link>
      <Link to={routes.USER}>
        <User />
      </Link>
    </StyledNav>
  );
};
