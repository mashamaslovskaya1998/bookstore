import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  ${media.MD} {
    margin-bottom: 80px;
  }
`;

export const StyledSignUp = styled.div`
  border: 1px solid rgb(231, 231, 231);
  max-width: 544px;
  width: 100%;
`;
export const StyledTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  padding: 26px 0 22px 0;
  text-align: center;
  ${media.MD} {
    font-weight: 700;
    line-height: 20px;
  }
`;
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
export const StyledText = styled.button`
  color: ${Colors.PRIMARY};
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  margin-bottom: 40px;
  border: none;
  background-color: ${Colors.BG_WHITE};
  cursor: pointer;
`;
export const StyledLink = styled(Link)`
  color: ${Colors.SECONDARY};
  cursor: pointer;
`;
export const ErrorMessage = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: ${Colors.CT_RED};
  background-color: ${Colors.TT_ORANGE};
`;

export const Notification = styled(ErrorMessage)`
  color: rgb(0, 0, 0);
`;
