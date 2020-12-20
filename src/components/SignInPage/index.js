import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import EmailForm from "./EmailForm";
import GoogleForm from "./GoogleForm";

const SignInPage = () => (
  <main className="auth">
    <Header />
    <EmailForm />
    <Footer />
  </main>
);

export default SignInPage;
