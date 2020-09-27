import React, { useStatus, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import getProfit from "../../../common/functions/getProfit";

export default function ProfitOutput({ bets = [] }) {
  return (
    <Container>
      <Row>
        <Col className="border border-2">
          <h2>${getProfit(bets).toFixed(2)} </h2>
          <h5>Profit</h5>
        </Col>
      </Row>
    </Container>
  );
}
