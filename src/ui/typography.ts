import { media } from "./media";

export const typography = {
  H1: `font-weight: 700;
    font-size: 56px;
    line-height: 64px;,

    ${media.SM}{
        font-weight: 700;
        font-size: 32px;
        line-height: 44px;
    }`,
  H2: `font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    ${media.SM}{
        font-weight: 700;
        font-size: 28px;
        line-height: 40px;
    }
    `,
  H3: `font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    `,
  S1: `font-weight: 700;
    font-size: 18px;
    line-height: 24px;`,
  B1: `font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    `,
  B2: `font-weight: 600;
    font-size: 16px;
    line-height: 20px;`,
};
