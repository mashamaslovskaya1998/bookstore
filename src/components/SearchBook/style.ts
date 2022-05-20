import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledSearchBooks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;
export const StyledText = styled.p`
  color: ${Colors.SECONDARY};
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 48px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const StyledImage = styled.img`
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  margin-bottom: 21px;
  & {
    transition: 0.6s;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
export const StyledIsbn = styled.p`
  color: ${Colors.SECONDARY};
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 24px;
`;
export const StyledTitle = styled.h3`
  color: ${Colors.PRIMARY};
  ${typography.H3}
  margin-bottom: 8px;
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
