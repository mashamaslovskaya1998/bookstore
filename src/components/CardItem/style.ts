import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledContainerCard = styled.div`
  display: grid;
  grid-template-columns: 2fr 100px 56px;
  grid-column-gap: 32px;
  margin-bottom: 50px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 32px;
  margin-bottom: 50px;
`;

export const StyledImageBlock = styled.div`
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  align-self: center;
`;

export const StyledImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;

  justify-content: center;
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
  /* display: flex;
  justify-content: center;
  align-items: center;
  max-width: 56px;
  width: 100%; */
  /* position: absolute; */
  background-color: ${Colors.BG_WHITE};
  border: none;
  /* right: 200px;
  top: 450px; */
  cursor: pointer;
`;
export const StyledCountButton = styled.button`
  background-color: ${Colors.BG_WHITE};
  font-size: 40px;
  border: none;
  padding: 0 10px;
`;
export const StyledCountContainer = styled.div`
  margin-top: 24px;
`;
