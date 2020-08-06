import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { useCheckAuth } from "../../../react-check-auth";
import GoogleForm from "../GoogleForm";
import api from "../../../common/api";
import * as ROUTES from "../../../constants/routes";
import { Form, Button, Alert } from "react-bootstrap";
import useFirebase from "../../../hooks/useFirebase";
import Loading from "../../Loading";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};
const SignInFormBase = ({ history }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(INITIAL_STATE);
  const firebase = useFirebase();
  const { refreshAuth } = useCheckAuth();
  const onSubmit = (event) => {
    setLoading(true);
    firebase
      .doSignInWithEmailAndPassword(user.email, user.password)
      .then((authResult) => authResult.user.getIdToken()) // Get user ID token from Firebase
      .then(api.session.start) // Send to our server and start the session
      .then(() => {
        setUser(INITIAL_STATE);
        refreshAuth();
        setLoading(false);
        history.push(ROUTES.DASHBOARD.as());
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

    event.preventDefault();
  };

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <Form className="auth-form" onSubmit={onSubmit}>
      {error && <Alert variant="danger">{error.message}</Alert>}
      <Form.Group controlId="formEmail">
        <Form.Control
          name="email"
          value={user.email}
          onChange={onChange}
          type="text"
          placeholder={"Email"}
        />
      </Form.Group>
      <Form.Group controlId="formPassword1">
        <Form.Control
          name="password"
          value={user.password}
          onChange={onChange}
          autoComplete="current-password"
          type="password"
          placeholder={"Password"}
        />
      </Form.Group>
      <Form.Group controlId="formSignIn">
        <Button
          className="btn btn-lg btn-block"
          variant="primary"
          disabled={user.password === "" || user.email === ""}
          type="submit"
        >
          Sign In
        </Button>
      </Form.Group>
      <Form.Group controlId="formGoogleSignIn">
        <GoogleForm />
      </Form.Group>

      <div className="form-group text-center">
        <div className="custom-control custom-control-inline custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="remember-me"
          />{" "}
          <label className="custom-control-label" htmlFor="remember-me">
            Keep me sign in
          </label>
        </div>
      </div>

      <div className="text-center pt-3">
        <Link to={ROUTES.FORGOT_PASSWORD.as()} className="link">
          Forgot Password?
        </Link>
      </div>
    </Form>
  );
};

export default withRouter(SignInFormBase);
