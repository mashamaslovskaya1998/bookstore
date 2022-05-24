import React from "react";
// import { Pagination } from "../Pagination/Pagination";
import { StyledFooter, StyledText } from "./style";

export const Footer = () => {
  return (
    <div>
      <StyledFooter>
        <StyledText>©2022 Bookstore</StyledText>
        <StyledText>All rights reserved</StyledText>
      </StyledFooter>
    </div>
  );
};
