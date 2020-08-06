import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import AuthorizedRoute from "../AuthorizedRoute";
import NotFoundPage from "../NotFound";
import * as ROUTES from "../../constants/routes";
import Header from "../Header";
import AccountPage from "./AccountPage";
import SportsBooksPage from "./SportsBooksPage";

function DashboardRouter() {
  return (
    <Switch>
      <AuthorizedRoute path={ROUTES.HOME.href} component={AccountPage} exact />{" "}
      <AuthorizedRoute
        path={ROUTES.DASHBOARD.href}
        component={AccountPage}
        exact
      />{" "}
      <AuthorizedRoute
        path={ROUTES.DASHBOARD_ACCOUNT.href}
        component={AccountPage}
      />
      <AuthorizedRoute
        path={ROUTES.DASHBOARD_SPORTSBOOKS.href}
        component={SportsBooksPage}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

function DashboardPage() {
  return (
    <>
      <Route component={Header} />
      <main className="app-main">
        <div className="wrapper">
          <div className="page">
            <div className="page-inner">
              <DashboardRouter />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default DashboardPage;
