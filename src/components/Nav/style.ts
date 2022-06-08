import styled from "styled-components";
import { Point } from "../../assets";
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
export const StyledCartCircle = styled.div`
  position: relative;
`;
export const StyledPoint = styled(Point)`
  position: absolute;
  top: -13px;
  right: 0px;
`;
