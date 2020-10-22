import React, { useStatus, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import getProfit from "../../../common/functions/getProfit";

export default function BetAmountOutput({ bets = [] }) {
  const value = bets.reduce((acc, b2) => acc + b2.bet_amount, 0).toFixed(0);
  return (
    <Container>
      <Row>
        <Col className="border border-2 text-center">
          <h2> ${value > 0 ? value : value * -1} </h2>
          <h5>Bet Amount</h5>
        </Col>
      </Row>
    </Container>
  );
}
