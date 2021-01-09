import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCheckAuth } from "../../../react-check-auth";
import LogOutButton from "../LogOutButton";
import * as ROUTES from "../../../constants/routes";

export default function AccountDropdown() {
  const { userInfo } = useCheckAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="top-bar-item top-bar-item-right px-5">
      <div className="dropdown">
        <button
          className="btn-account"
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          aria-haspopup={true}
          aria-expanded={false}
        >
          <span className="account-summary pr-lg-1 text-center">
            <span className="account-name">
              {userInfo.first_name ? userInfo.first_name[0] : ""}{" "}
              {userInfo.last_name ? userInfo.last_name[0] : ""}
            </span>{" "}
          </span>
        </button>
        <div
          onMouseLeave={() => setShowDropdown(false)}
          onClick={() => setShowDropdown(!showDropdown)}
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
          <div className="dropdown-divider"></div>
          <LogOutButton />
        </div>
      </div>
    </div>
  );
}
