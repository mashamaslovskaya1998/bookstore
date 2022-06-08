import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const StyledContainerCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 56px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  grid-gap: 32px;
  justify-items: center;
  align-items: center;
  ${media.MD} {
    position: relative;
    display: block;

    align-content: center;
    justify-self: center;
  }

  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const DescriptionBlock = styled.div``;
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
  & {
    transition: 0.6s;
  }
  &:hover {
    transform: scale(1.1);
  }
  ${media.MD} {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;

    justify-content: center;
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
  ${media.MD} {
    position: absolute;
    right: 0;
    top: 460px;
  }
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
  ${media.MD} {
    position: absolute;
    right: 0;
    top: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    background: linear-gradient(225deg, #8693a0, #9faebe);
    box-shadow: -13px 13px 27px #5f6872, 13px -13px 27px #cbdef2;
  }
`;
export const StyledCountButton = styled.button`
  background-color: ${Colors.BG_WHITE};
  font-size: 40px;
  border: none;
  padding: 0 10px;
`;
export const StyledCountContainer = styled.div`
  /* margin-top: 24px; */
`;
export const Count = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
`;
export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  margin: auto 10px 0;
  border: none;
`;
export const Button = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: ${Colors.BG_WHITE};
  cursor: pointer;
  &:hover {
    path {
      fill: rgb(71, 73, 115);
    }
  }
`;
