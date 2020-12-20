import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Loading from "../Loading";
import Footer from "./Footer";
import EmailForm from "./EmailForm";
import useFirebase from "../../hooks/useFirebase";
import Error from "../Error";
import * as ROUTES from "../../constants/routes";

const SignInPage = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const firebase = useFirebase();

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await firebase.auth.sendPasswordResetEmail(values.email);
    } catch (e) {
      setError(e);
    }
    history.push(ROUTES.SIGN_IN.as());
  };
  if (loading) return <Loading />;
  return (
    <main className="auth">
      {error && <Error error={error} />}
      <EmailForm onSubmit={onSubmit} />
      <Footer />
    </main>
  );
};

export default withRouter(SignInPage);
