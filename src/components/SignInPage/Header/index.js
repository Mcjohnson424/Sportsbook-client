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
        <img style={{ height: 80 }} src="https://www.sportsbookscout.com/wp-content/uploads/2019/01/icons8-binoculars-512.png"></img>
      </h1>
      <p>
        Don't have a account?{" "}
        <NavLink to={ROUTES.SIGN_UP.as()} className="sign-in-link">
          Create One{" "}
        </NavLink>
      </p>
    </header>
  );
}
