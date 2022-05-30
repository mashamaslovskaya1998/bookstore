import React from "react";
import { Navigate } from "react-router-dom";
import { routes } from "../routes/routes";

export const User = () => {
  const isAuth = false;
  if (isAuth) {
    return <div></div>;
  }
  return (
    <div>
      {/* <User /> */}
      <Navigate to={routes.SIGN_IN} />
    </div>
  );
};
