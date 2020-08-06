import React from "react";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

export default function Header() {
  return (
    <header
      id="auth-header"
      className="auth-header"
      style={{ backgroundImage: "url(assets/images/Background_Dark.svg)" }}
    >
      <h1>
        <img style={{ height: 38 }} src="/assets/images/Logo.png"></img>
      </h1>
      <p>
        {" "}
        Already have an account? please{" "}
        <NavLink to={ROUTES.SIGN_IN.as()} className="sign-in-link">Sign In</NavLink>
      </p>
    </header>
  );
}
