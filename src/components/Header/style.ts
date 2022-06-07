import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../ui/media";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 72px;
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px rgb(231, 231, 231) solid;
  ${media.MD} {
  }
`;
export const StyledLink = styled(Link)`
  display: block;
  margin-right: 20px;
  cursor: pointer;
`;
