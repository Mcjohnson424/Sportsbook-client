import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCheckAuth } from "../../../react-check-auth";
import LogOutButton from "../LogOutButton";
import * as ROUTES from "../../../constants/routes";

export default function AccountDropdown() {
  const { userInfo } = useCheckAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="top-bar-item top-bar-item-right px-0">
      <div className="dropdown ">
        <button
          className="btn-account"
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          aria-haspopup={true}
          aria-expanded={false}
        >
          <span className="account-summary pr-lg-4">
            <span className="account-name">
              {userInfo.first_name} {userInfo.last_name}
            </span>{" "}
          </span>
          <span className="user-avatar user-avatar-md mb-2">
            <i className="fas fa-chart-bar"></i>
          </span>{" "}
        </button>
        <div
          onMouseLeave={() => setShowDropdown(false)}
          className={`dropdown-menu ${showDropdown ? "show" : ""}`}
        >
          <div className="dropdown-arrow d-lg-none" x-arrow=""></div>
          <div className="dropdown-arrow ml-3 d-none d-lg-block"></div>

          <Link className="dropdown-item" to={ROUTES.DASHBOARD_ACCOUNT.as()}>
            Account
          </Link>

          <Link
            className="dropdown-item"
            to={ROUTES.DASHBOARD_SPORTSBOOKS.as()}
          >
            Sportsbooks
          </Link>

          <Link className="dropdown-item" to={ROUTES.DASHBOARD_BETLOG.as()}>
            Bet Log
          </Link>
          <Link className="dropdown-item" to={ROUTES.DASHBOARD_REPORTING.as()}>
            Reporting
          </Link>
          <div className="dropdown-divider"></div>
          <LogOutButton />
        </div>
      </div>
    </div>
  );
}
