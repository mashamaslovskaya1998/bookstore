import styled from "styled-components";
import { media } from "../../ui/media";

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 184px;
  width: 100%;
  ${media.MD} {
    max-width: 100;
    width: 100%;
  }
`;

export const StyledImg = styled.img`
  width: 24px;
  height: 24px;
  ${media.MD} {
    width: 20px;
    height: 20px;
  }
`;
