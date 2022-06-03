import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledInfoBlock = styled.div`
  background-color: ${Colors.TT_PURPLE};
  padding: 56px 64px;
`;
export const StyledInfo = styled.h2`
  text-transform: uppercase;
  color: ${Colors.PRIMARY};
  ${typography.H2}
`;
export const StyledInfoInformation = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;

  color: ${Colors.PRIMARY};
  margin-bottom: 32px;
`;
export const StyledInfoInput = styled.input`
  max-width: 766px;
  width: 100%;
  padding: 16px 24px;
  border: none;
`;
export const StyledInfoButton = styled.button`
  padding: 13px 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  border: none;
  background-color: ${Colors.PRIMARY};
  color: ${Colors.BG_WHITE};
`;
