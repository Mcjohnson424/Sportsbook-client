import React, { useStatus, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import getROI from "../../../common/functions/getROI";

export default function ROIOutput({ bets = [] }) {
  const value = getROI(bets).toFixed(2);
  return (
    <Container>
      <Row>
        <Col className="border border-2">
          <h2>
            {value > 0 ? "+" : "-"}{value > 0 ? value : value * -1}%{" "}
          </h2>
          <h5>ROI</h5>
        </Col>
      </Row>
    </Container>
  );
}
