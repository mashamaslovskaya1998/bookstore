import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

import { Nav } from "../Nav/Nav";
import { Search } from "../Search/Search";
// import { Search } from "../Search/Search";
import { StyledHeader, StyledLogo } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo src={Logo} alt="Logo" />
      </Link>
      <Search />
      <Nav />
    </StyledHeader>
  );
};
