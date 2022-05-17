import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes/routes";

export const Bag = () => {
  return (
    <div>
      <Link to={routes.BAG}>Bag</Link>
    </div>
  );
};
