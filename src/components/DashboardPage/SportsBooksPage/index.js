import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthorizedRoute from "../../AuthorizedRoute";
import NotFoundPage from "../../NotFound";
import * as ROUTES from "../../../constants/routes";
import SportsBooksAccountListPage from "./SportsBooksAccountListPage";
import SportsBooksAccountCreatePage from "./SportsBooksAccountCreatePage";
import SportsBooksAccountShowPage from "./SportsBooksAccountShowPage";
import SportsBooksAccountEditPage from "./SportsBooksAccountEditPage";

export default function SportsBooksPage() {
  return (
    <Switch>
      <AuthorizedRoute
        path={ROUTES.DASHBOARD_SPORTSBOOKS.href}
        component={SportsBooksAccountListPage}
        exact
      />
      <AuthorizedRoute
        path={ROUTES.DASHBOARD_SPORTSBOOKS_ACCOUNTS.href}
        component={SportsBooksAccountListPage}
        exact
      />
      <AuthorizedRoute
        path={ROUTES.DASHBOARD_SPORTSBOOKS_ACCOUNTS_LIST.href}
        component={SportsBooksAccountListPage}
      />
      <AuthorizedRoute
        path={ROUTES.DASHBOARD_SPORTSBOOKS_ACCOUNTS_CREATE.href}
        component={SportsBooksAccountCreatePage}
      />
      <AuthorizedRoute
        path={ROUTES.DASHBOARD_SPORTSBOOKS_ACCOUNTS_SHOW.href}
        component={SportsBooksAccountShowPage}
      />
      <AuthorizedRoute
        path={ROUTES.DASHBOARD_SPORTSBOOKS_ACCOUNTS_EDIT.href}
        component={SportsBooksAccountEditPage}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
