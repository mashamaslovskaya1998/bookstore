import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const StyledUser = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(528px, 1fr)); */
  display: flex;
  grid-gap: 32px;
  max-width: 1120px;
  width: 100%;
  border-bottom: 1px rgb(231, 231, 231) solid;
  padding-bottom: 72px;
  margin-bottom: 48px;
  ${media.MD} {
    display: grid;
    max-width: 688px;
    width: 100%;
  }
`;
export const StyledLabelContainer = styled.div`
  max-width: 528px;
  width: 100%;
  ${media.MD} {
    max-width: 688px;
    width: 100%;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  ${media.MD} {
    justify-content: center;
  }
`;
export const StyledButtonSave = styled.button`
  max-width: 528px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${Colors.PRIMARY};
  text-transform: uppercase;
  color: ${Colors.BG_WHITE};
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  border: none;
  border-radius: 2px;

  cursor: pointer;
  ${media.MD} {
    max-width: 688px;
    width: 100%;
  }
`;

export const StyledTitleProfile = styled.h2`
  ${typography.H3};
  margin-bottom: 16px;
`;

export const StyledForm = styled.form``;
export const StyledLabel = styled.p`
  margin-bottom: 10px;
  cursor: pointer;
  ${media.MD} {
    /* display: grid; */
    justify-items: start;
    /* display: flex; */
    /* justify-content: center; */
  }
`;
export const StyledInput = styled.input`
  max-width: 544px;
  width: 100%;
  padding-left: 20px;
  padding-top: 11px;
  padding-bottom: 11px;
  border: 1px solid rgb(231, 231, 231);
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
  }
  ${media.MD} {
    display: grid;
    max-width: 688px;
    width: 100%;
  }
`;
export const ErrorMassage = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 40px;
  margin-top: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: rgb(255, 0, 0);
  background-color: ${Colors.TT_ORANGE};
`;

export const Notification = styled(ErrorMassage)`
  color: rgb(0, 0, 0);
`;
