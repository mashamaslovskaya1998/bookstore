import styled from "styled-components";
import { ArrowDown } from "../../assets";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";
interface IButton {
  isActive: boolean;
}

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
  position: relative;
`;
export const StyledImage = styled.img`
  position: absolute;
  margin: auto;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
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
export const StyledAttributeDetails = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 59px;
  color: ${Colors.PRIMARY};
`;
export const StyledAttributeDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 59px;
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
  grid-column-gap: 20px;
  margin-bottom: 40px;
`;
export const StyledButton = styled.button`
  background-color: ${Colors.PRIMARY};
  color: ${Colors.BG_GREY};
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  padding: 13px;
  border-radius: 5px;
  cursor: pointer;
`;
export const HeartContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70px;
  width: 100%;
  background-color: ${Colors.BG_GREY};
  border: 1px solid ${Colors.PRIMARY};
  border-radius: 5px;
  cursor: pointer;
`;
export const StyledBlockButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px rgb(231, 231, 231) solid;
  margin-bottom: 48px;
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
  scroll-behavior: smooth;
`;

export const StyledTabs = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  border-bottom: 1px rgb(231, 231, 231) solid;
  margin-bottom: 48px;
`;

export const StyledTab = styled.button<IButton>`
  padding: 0 40px 24px;
  background-color: ${Colors.BG_WHITE};
  border: none;

  color: ${Colors.PRIMARY};
  cursor: pointer;

  border-bottom: ${({ isActive }) =>
    isActive ? "1px solid rgb(13, 12, 29)" : ""};
  cursor: pointer;
`;

export const StyledTabPanel = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;

  color: ${Colors.PRIMARY};
  margin-bottom: 48px;
`;
export const BookRating = styled.div`
  margin-right: 20px;
`;
