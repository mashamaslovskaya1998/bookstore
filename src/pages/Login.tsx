import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes/routes";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to={routes.SIGN_IN}>Go to register</Link>
    </div>
  );
};

export default Login;
