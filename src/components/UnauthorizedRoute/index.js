import React from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthConsumer } from "../../react-check-auth";

import Loading from "../../components/Loading";

import * as ROUTES from "../../constants/routes";

class UnauthorizedRoute extends React.Component {
  render() {
    const { component: Component, userInfo, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) => {
          return (
            <AuthConsumer>
              {({ userInfo, isLoading, error }) => {
                if (isLoading) {
                  return <Loading />;
                }

                return <Component {...this.props} />;
              }}
            </AuthConsumer>
          );
        }}
      />
    );
  }
}

export default UnauthorizedRoute;
