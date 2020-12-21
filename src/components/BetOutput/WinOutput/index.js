import React, { useStatus, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import getWinPercent from "../../../common/functions/getWinPercent";

export default function ROIOutput({ bets = [] }) {
  return (
    <Container>
        <Col className="border border-2 text-center stats">
          <h2>{(getWinPercent(bets) * 100).toFixed(1)}% </h2>
          <h5>Win %</h5>
        </Col>
    </Container>
  );
}
