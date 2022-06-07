import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledSearchBooks = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 32px;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto 72px auto;
  padding: 0;
  list-style: none;
  padding-bottom: 73px;
  border-bottom: 1px rgb(231, 231, 231) solid;
`;
export const StyledText = styled.p`
  color: ${Colors.SECONDARY};
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 48px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;

  padding: 3px 5px;
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
export const StyledImage = styled.img`
  /* -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  margin-bottom: 21px;
  & {
    transition: 0.6s;
  }
  &:hover {
    transform: scale(1.1);
  } */
  margin-bottom: 21px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  justify-content: center;
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
  height: 65px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const StyledSubtitle = styled.p`
  color: ${Colors.PRIMARY2};
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 24px;

  height: 65px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const StyledPrice = styled.h3`
  ${typography.H3}
  color: ${Colors.PRIMARY};
`;
export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledPaginationButton = styled.button`
  border: none;
  background-color: ${Colors.BG_WHITE};
  color: ${Colors.PRIMARY};
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin: 0 8px;
  cursor: pointer;
`;
