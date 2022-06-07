import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const SliderMainTitle = styled.h2`
  ${typography.H2}
  margin-bottom: 48px;
`;

export const CustomSlide = styled.div`
  padding: 0 20px;
  display: block;
  max-width: 400px;
  width: 100%;

  cursor: pointer;
`;
export const StyledImageBlock = styled.img`
  margin-bottom: 21px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  justify-content: center;
`;

export const SliderTitle = styled.h3`
  ${typography.H3}
  color: ${Colors.PRIMARY};
  margin-bottom: 8px;
  height: 65px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const SliderSubtitle = styled.h3`
  ${typography.B2}
  color: ${Colors.SECONDARY};
  margin-bottom: 40px;

  height: 65px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const SliderPrice = styled.h3`
  ${typography.H3}
  color: ${Colors.PRIMARY};
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  padding: 0 3px;
  border-radius: 3px;
  /* border: 1px solid black; */
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  & {
    transition: 0.6s;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
