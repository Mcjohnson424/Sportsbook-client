import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import api from "../../../../common/api";
import SportsBooksAccountForm from "../SportsBooksAccountForm";
import * as ROUTES from "../../../../constants/routes";
import Error from "../../../Error";
import Loading from "../../../Loading";

function SportsBooksAccountCreatePage({ history }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await api.accounts.create(data);
      history.push(ROUTES.DASHBOARD_SPORTSBOOKS_ACCOUNTS.as());
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  if (loading) return <Loading />;
  return (
    <Container fluid={true}>
      {error && <Error error={error} />}
      <Row>
        <Col>
          <h2>Create Sportbook account</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <SportsBooksAccountForm onSubmit={onSubmit} />
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(SportsBooksAccountCreatePage);
