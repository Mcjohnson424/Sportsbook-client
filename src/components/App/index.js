import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { AuthConsumer } from "../../react-check-auth";
import { Container, Row, Col } from "react-bootstrap";

import Header from "../Header";
import SignInPage from "../SignInPage";
import SignUpPage from "../SignUpPage";
import DashboardPage from "../DashboardPage";
import ForgotPasswordPage from "../ForgotPasswordPage";

import * as ROUTES from "../../constants/routes";
import AuthorizedRoute from "../AuthorizedRoute";
import UnauthorizedRoute from "../UnauthorizedRoute";

import NotFoundPage from "../NotFound";
import withFirebase from "../../hocs/withFirebase";

const App = () => (
  <Router>
    {" "}
    <Switch>
      <AuthorizedRoute path={"/"} component={DashboardPage} exact />
      <UnauthorizedRoute
        path={ROUTES.SIGN_IN.href}
        component={SignInPage}
        exact
      />
      <UnauthorizedRoute
        path={ROUTES.SIGN_UP.href}
        component={SignUpPage}
        exact
      />
      <UnauthorizedRoute
        path={ROUTES.FORGOT_PASSWORD.href}
        component={ForgotPasswordPage}
        exact
      />
      <AuthorizedRoute path={ROUTES.DASHBOARD.href} component={DashboardPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default withFirebase(App);
