import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";

import { Nav } from "../Nav/Nav";
import { Search } from "../Search/Search";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo />
      </Link>
      <Search />
      <Nav />
    </StyledHeader>
  );
};
