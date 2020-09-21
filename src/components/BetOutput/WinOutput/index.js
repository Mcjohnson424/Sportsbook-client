import React, { useStatus, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import getWinPercent from "../../../common/functions/getWinPercent";

export default function ROIOutput({ bets = [] }) {
  return (
    <Container>
      <Row>
        <Col className="border border-2">
          <h2>{getWinPercent(bets).toFixed(2)}% </h2>
          <h5>Win %</h5>
        </Col>
      </Row>
    </Container>
  );
}
