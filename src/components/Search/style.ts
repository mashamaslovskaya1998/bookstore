import styled from "styled-components";
import { Colors } from "../../ui/colors";

export const StyledForm = styled.form`
  position: relative;
  max-width: 542px;
  width: 100%;
`;

export const StyledSearch = styled.input`
  max-width: 542px;
  width: 100%;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  background-color: ${Colors.BG_LIGHT};
  border: 1px solid ${Colors.BG_GREY};
  border: 1px solid rgb(231, 231, 231);
`;
export const StyledButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  max-width: 24px;
  width: 100%;
  height: 24px;
  border: none;
  background-color: transparent;

  cursor: pointer;
`;
