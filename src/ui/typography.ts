import { css } from "styled-components";
import { media } from "./media";

const H1 = css`
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;

  ${media.SM} {
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
  }
`;
const H2 = css`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  ${media.SM} {
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
  }
`;
const H3 = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;
const S1 = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`;
const B1 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;
const B2 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

export const typography = {
  H1,
  H2,
  H3,
  S1,
  B1,
  B2,
};
