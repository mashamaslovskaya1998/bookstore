import React, { ReactNode } from "react";
import { StyledTitle } from "./style";

interface IProps {
  children: ReactNode;
}

export const Title = ({ children }: IProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};
