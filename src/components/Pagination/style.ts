import styled from "styled-components";
import { Colors } from "../../ui/colors";

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
