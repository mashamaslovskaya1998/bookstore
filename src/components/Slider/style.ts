import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const SliderMainTitle = styled.h2`
  ${typography.H2}
  margin-bottom: 48px;
`;

export const CustomSlide = styled.div`
  /* margin-bottom: 40px; */
  padding: 0 20px;
  display: block;
  max-width: 330px;
  width: 100%;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;

  cursor: pointer;
`;
export const StyledImageBlock = styled.img`
  margin-bottom: 21px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  justify-content: center;
  & {
    transition: 0.6s;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
export const SlideContainer = styled.div`
  /* margin-top: 0 auto; */
  margin: 0 auto;
  position: relative;
`;
export const SliderBlock = styled.div`
  /* display: block;
  justify-content: space-around; */
  /* margin: 0 auto; */
`;
export const SliderTitle = styled.h3`
  ${typography.H3}
  color: ${Colors.PRIMARY};
  margin-bottom: 8px;
`;
export const SliderSubtitle = styled.h3`
  ${typography.B2}
  color: ${Colors.SECONDARY};
  margin-bottom: 40px;
`;

export const SliderPrice = styled.h3`
  ${typography.H3}
  color: ${Colors.PRIMARY};
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
