import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as ROUTES from "../../../../constants/routes";

export default function SportsBooksAccountListPage() {
  return (
    <Container fluid={true}>
      List
      <Row>
        <Col>
          <Link to={ROUTES.DASHBOARD_SPORTSBOOKS_ACCOUNTS_CREATE.as()}>
            <Button>Create new</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
