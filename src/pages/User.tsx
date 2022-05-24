import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes/routes";

export const User = () => {
  return (
    <div>
      <Link to={routes.user}>User</Link>
    </div>
  );
};
