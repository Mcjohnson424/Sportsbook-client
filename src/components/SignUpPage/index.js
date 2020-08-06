import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Loading from "../Loading";
import Error from "../Error";
import SignUpForm from "./SignUpForm";
import Header from "./Header";
import Footer from "./Footer";
import api from "../../common/api";
import pickUser from "./pickUser";
import * as ROUTES from "../../constants/routes";
import useFirebase from "../../hooks/useFirebase";

const SignUp = ({ history }) => {
  const firebase = useFirebase();
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  if (loading) return <Loading />;
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const {
        user: firebaseUser,
      } = await firebase.doCreateUserWithEmailAndPassword(
        data.email,
        data.password
      );
      await api.users.create({
        id: firebaseUser.uid,
        ...pickUser(data),
      });
      history.push(ROUTES.SIGN_IN.as());
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="auth">
      <Header />
      <SignUpForm onSubmit={onSubmit} error={error} />
      <Footer />
    </main>
  );
};

export default withRouter(SignUp);
