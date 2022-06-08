import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const StyledContainerFavorites = styled.div`
  display: grid;
  grid-template-columns: 1fr 56px;
  width: 100%;
  grid-column-gap: 32px;
  margin-bottom: 50px;
  ${media.MD} {
    position: relative;
    display: block;
    /* max-width: 350px; */
    align-content: center;
    justify-self: center;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 32px;
  margin-bottom: 50px;
  ${media.MD} {
    position: relative;
    display: block;
  }
`;

export const StyledImageBlock = styled.div`
  border-radius: 12px;
  background: #ced9f8;
  box-shadow: -17px 17px 40px #b5bfda, 17px -17px 40px #e7f3ff;
  ${media.MD} {
    display: block;
    position: relative;
    justify-items: center;
  }
`;

export const StyledImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  justify-content: center;
  & {
    transition: 0.6s;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
export const StyledTitle = styled.h3`
  color: ${Colors.PRIMARY};
  ${typography.H3}
`;

export const StyledSubtitle = styled.p`
  color: ${Colors.PRIMARY2};
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 24px;
`;
export const StyledPrice = styled.h3`
  ${typography.H3}
  color: ${Colors.PRIMARY};
`;

export const StyledBlock = styled.div`
  align-self: center;
`;
export const HeartContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 56px;
  width: 100%;
  border: none;
  background-color: ${Colors.BG_WHITE};
  cursor: pointer;
  ${media.MD} {
    position: absolute;
    right: 0;
    top: 1px;
    padding: 10px 20px;
    border-radius: 5px;
    background: linear-gradient(225deg, #8693a0, #9faebe);
    box-shadow: -13px 13px 27px #5f6872, 13px -13px 27px #cbdef2;
  }
`;
