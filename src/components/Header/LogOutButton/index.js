import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { useCheckAuth } from "../../../react-check-auth";
import useFirebase from "../../../hooks/useFirebase";
import * as ROUTES from "../../../constants/routes";
import sessionApi from "../../../common/api/session";

const LogOutButton = ({ history }) => {
  const firebase = useFirebase();
  const { refreshAuth } = useCheckAuth();
  return (
    <span
      onClick={() => {
        firebase
          .doSignOut()
          .then(sessionApi.stop)
          .then(() => {
            refreshAuth();
            history.push(ROUTES.SIGN_IN.as());
          });
      }}
      className="dropdown-item"
    >
      Log out
    </span>
  );
};

export default withRouter(LogOutButton);
