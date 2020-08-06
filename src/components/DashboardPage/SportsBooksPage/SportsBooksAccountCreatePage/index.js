import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import api from "../../../../common/api";
import SportsBooksAccountForm from "../SportsBooksAccountForm";
import Error from "../../../Error";
import Loading from '../../../Loading'

export default function SportsBooksAccountCreatePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await api.accounts.create(data);
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
