import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "../../react-check-auth";
import Loading from "../../components/Loading";
import * as ROUTES from "../../constants/routes";

class AuthorizedRoute extends React.Component {
  render() {
    const { component: Component, userInfo, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          return (
            <AuthConsumer>
              {({ userInfo, isLoading, error }) => {
                if (!userInfo && !isLoading) {
                  return <Redirect to={ROUTES.SIGN_IN.as()} />;
                }

                if (isLoading) {
                  return <Loading />;
                }
                return <Component {...this.props} userInfo={userInfo} />;
              }}
            </AuthConsumer>
          );
        }}
      />
    );
  }
}

export default AuthorizedRoute;
