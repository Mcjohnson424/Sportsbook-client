import React, { useStatus, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import getProfit from "../../../common/functions/getProfit";

export default function BetAmountOutput({ bets = [] }) {
  const value = bets.reduce((acc, b2) => acc + b2.bet_amount, 0).toFixed(0);
  return (
    <Container>
        <Col className="border border-2 text-center stats highlight-stat">
          <h2> ${value > 0 ? value : value * -1} </h2>
          <h5>Amount</h5>
        </Col>
    </Container>
  );
}
