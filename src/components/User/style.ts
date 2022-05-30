import styled from "styled-components";

export const StyledUser = styled.div``;
export const StyledButton = styled.button`
  max-width: 480px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  background-color: rgb(13, 12, 29);

  cursor: pointer;
`;
export const StyledForm = styled.form`
  padding: 40px 32px;
  border-top: 1px solid rgb(231, 231, 231);
`;
export const StyledLabel = styled.p`
  margin-bottom: 10px;
  cursor: pointer;
`;
export const StyledInput = styled.input`
  max-width: 480px;
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
  max-width: 480px;
  width: 100%;
  padding-left: 20px;
  padding-top: 11px;
  padding-bottom: 11px;
  margin-bottom: 40px;
  border: 1px solid rgb(231, 231, 231);
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
  }
`;
