import { Logo } from "../../assets";
import { routes } from "../../routes/routes";

import { Nav } from "../Nav/Nav";
import { Search } from "../Search/Search";
import { StyledHeader, StyledLink } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to={routes.NEWBOOK}>
        <Logo />
      </StyledLink>
      <Search />
      <Nav />
    </StyledHeader>
  );
};
