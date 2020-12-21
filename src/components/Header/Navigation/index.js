import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import Brand from "../Brand";
import LogOutButton from "../LogOutButton";
import AccountDropdown from "../AccountDropdown";
import * as ROUTES from "../../../constants/routes";

const Navigation = (props) => {
  return (
    <header className="app-header app-header-dark">
      <div className="top-bar">
        <Brand />{" "}
        <div className="top-bar-list">
          <div className="top-bar-item top-bar-item-left">
            <Link
              className=" top-bar-item-link link-text"
              to={ROUTES.DASHBOARD.as()}
            >
              Dashboard
            </Link>
          </div>{" "}
          <div className="top-bar-item ml-4 ml-md-0">
            <Link
              className="top-bar-item-link link-text"
              to={ROUTES.DASHBOARD_BETLOG.as()}
            >
              Bet Log
            </Link>
          </div>{" "}
          <AccountDropdown />
        </div>
      </div>
    </header>
  );
};

export default withRouter(Navigation);
