import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledUser = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(520px, 1fr));
  grid-gap: 32px;
`;
export const StyledButtonSave = styled.button`
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${Colors.PRIMARY};
  text-transform: uppercase;
  color: ${Colors.BG_WHITE};
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  grid-column-start: 3;
  grid-column-end: 4;
  cursor: pointer;
`;
export const StyledButtonCancel = styled.button`
  padding-top: 16px;
  padding-bottom: 16px;
  text-transform: uppercase;
  background-color: ${Colors.BG_WHITE};
  color: ${Colors.PRIMARY};
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  border: 1px solid gray;
  cursor: pointer;
`;
export const StyledUserButton = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
  border-top: 1px rgb(231, 231, 231) solid;
  padding-top: 48px;
`;
export const StyledTitleProfile = styled.h2`
  ${typography.H3};
  margin-bottom: 16px;
`;
export const StyledTitlePassword = styled.h2`
  ${typography.H3};
  margin: 28px 0 16px;
`;
export const StyledForm = styled.form``;
export const StyledLabel = styled.p`
  margin-bottom: 10px;
  cursor: pointer;
`;
export const StyledInput = styled.input`
  max-width: 544px;
  width: 100%;
  padding-left: 20px;
  padding-top: 11px;
  padding-bottom: 11px;
  margin-bottom: 20px;
  border: 1px solid rgb(231, 231, 231);
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
  }
`;
export const StyledPasswordInput = styled.input`
  max-width: 544px;
  width: 100%;
  padding-left: 20px;
  padding-top: 11px;
  padding-bottom: 11px;
  margin-bottom: 72px;
  border: 1px solid rgb(231, 231, 231);
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
  }
`;
