import React, { useStatus, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import getProfit from "../../../common/functions/getProfit";

export default function ProfitOutput({ bets = [] }) {
  const value = getProfit(bets).toFixed(0);
  return (
    <Container>
      <Row>
        <Col className="border border-2 text-center">
          <h2>
            {" "}
            {value > 0 ? "+" : "-"}${value > 0 ? value : value * -1}{" "}
          </h2>
          <h5>Profit</h5>
        </Col>
      </Row>
    </Container>
  );
}
