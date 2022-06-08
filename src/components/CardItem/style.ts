import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
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

  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const DescriptionBlock = styled.div``;
export const StyledImage = styled.img`
  border-radius: 12px;
  border-radius: 12px;
  border-radius: 12px;
  border-radius: 12px;
  background: #ced9f8;
  box-shadow: -17px 17px 40px #b5bfda, 17px -17px 40px #e7f3ff;
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

// export const StyledBlock = styled.div`
//   align-self: center;
// `;
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
