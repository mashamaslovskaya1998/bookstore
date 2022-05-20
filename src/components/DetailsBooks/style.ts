import styled from "styled-components";
import { ArrowDown } from "../../assets";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledDetails = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 128px;
  margin-bottom: 72px;
`;
export const StyledImageBlock = styled.div`
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
`;
export const StyledImage = styled.img`
  margin-bottom: 21px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  justify-content: center;
`;
export const StyledBlock = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
  row-gap: 24px;
`;
export const StyledPrice = styled.div`
  ${typography.H3}
  color: ${Colors.PRIMARY};
  padding-top: 24px;
  border-top: 1px rgb(231, 231, 231) solid;
`;
export const StyledParams = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: ${Colors.SECONDARY};
`;
export const StyledAttribute = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: ${Colors.PRIMARY};
`;
export const StyledInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const StyledButtonContainer = styled.div`
  /* display: block; */
  display: grid;
  grid-column-start: 1;
  grid-column-end: 3;
`;
export const StyledButton = styled.button`
  background-color: ${Colors.PRIMARY};
  color: ${Colors.BG_WHITE};
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  padding: 13px;
  border-radius: 5px;
`;
export const StyledBlockButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px rgb(231, 231, 231) solid;
`;
export const StyledDescriptionButtons = styled.button`
  color: ${Colors.PRIMARY};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 24px;
  border: none;
  background-color: white;
  &:hover {
    border-bottom: 2px solid black;
    transition: 0.3s linear;
  }
`;
export const StyledArrowDown = styled(ArrowDown)`
  margin-left: 5px;
`;
