import React, { useStatus, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import getProfit from "../../../common/functions/getProfit";

export default function BetsOutput({ bets = [] }) {
  const value = bets.length;
  return (
    <Container>
      <Row>
        <Col className="border border-2 text-center">
          <h2> {value}</h2>
          <h5>Bets</h5>
        </Col>
      </Row>
    </Container>
  );
}
