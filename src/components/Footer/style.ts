import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";
export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 72px;
  padding: 36px 0;
  border-top: 1px rgb(231, 231, 231) solid;
`;
export const StyledText = styled.p`
  ${typography.S1}
  color: ${Colors.SECONDARY};
`;
