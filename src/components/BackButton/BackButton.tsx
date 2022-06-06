import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "../../assets";
import { BackButtonBlock } from "./style";

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <BackButtonBlock onClick={handleBack}>
      <ArrowLeft />
    </BackButtonBlock>
  );
};
