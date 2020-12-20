import React, { useStatus, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import getROI from "../../../common/functions/getROI";

export default function ROIOutput({ bets = [] }) {
  const value = (getROI(bets) * 100).toFixed(1);
  return (
    <Container>
      <Row>
        <Col className="border border-2 text-center">
          <h2>
            {value > 0 ? "+" : "-"}
            {value > 0 ? value : value * -1}%{" "}
          </h2>
          <h5>ROI</h5>
        </Col>
      </Row>
    </Container>
  );
}
