import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import sessionApi from "../../../common/api/session";
import * as ROUTES from "../../../constants/routes";
import { Form, Button, Alert } from "react-bootstrap";
import Error from "../../Error";
import useFirebase from "../../../hooks/useFirebase";
import { useCheckAuth } from "../../../react-check-auth";

const ERROR_CODE_ACCOUNT_EXISTS =
  "auth/account-exists-with-different-credential";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

const SignInGoogleBase = ({ history }) => {
  const [error, setError] = useState(null);
  const firebase = useFirebase();
  const { refreshAuth } = useCheckAuth();

  const onSubmit = () => {
    firebase
      .doSignInWithGoogle()
      .then((authResult) => authResult.user.getIdToken()) // Get user ID token from Firebase
      .then(sessionApi.start) // Send to our server and start the session
      .then(() => {
        setError(null);
        refreshAuth();
        history.push(ROUTES.DASHBOARD.as());
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        setError(error);
      });

  };

  return (
    <>
      {error && <Error error={error} />}
      <Button
        variant="primary"
        onClick={onSubmit}
        className="btn btn-lg btn-block"
      >
        Sign In With Google
      </Button>
    </>
  );
};

export default withRouter(SignInGoogleBase);
