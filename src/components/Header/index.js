import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import { AuthConsumer } from "../../react-check-auth";

const Header = () => (
  <AuthConsumer>
    {({ userInfo, isLoading }) => {
      return isLoading || !userInfo ? null : (
        <Navigation isLoading={isLoading} userInfo={userInfo} />
      );
    }}
  </AuthConsumer>
);

export default Header;
