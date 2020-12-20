import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Doughnut } from 'react-chartjs-2';
import AuthorizedRoute from "../AuthorizedRoute";
import NotFoundPage from "../NotFound";
import * as ROUTES from "../../constants/routes";
import Header from "../Header";
import AccountPage from "./AccountPage";
import SportsBooksPage from "./SportsBooksPage";
import BetLogPage from "./BetLogPage";
import ReportingPage from "./ReportingPage";
import MainPage from "./MainPage";

function DashboardRouter() {
  return (
    <Switch>
      <AuthorizedRoute path={ROUTES.HOME.href} component={MainPage} exact />{" "}
      <AuthorizedRoute
        path={ROUTES.DASHBOARD.href}
        component={MainPage}
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
      
      <AuthorizedRoute
        path={ROUTES.DASHBOARD_BETLOG.href}
        component={BetLogPage}
      />
      <AuthorizedRoute
        path={ROUTES.DASHBOARD_REPORTING.href}
        component={ReportingPage}
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
