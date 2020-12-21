import React, { useStatus, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import getROI from "../../../common/functions/getROI";

export default function ROIOutput({ bets = [] }) {
  const value = (getROI(bets) * 100).toFixed(1);
  return (
    <Container>
        <Col className="border border-2 text-center stats">
          <h2>
            {value > 0 ? "+" : "-"}
            {value > 0 ? value : value * -1}%{" "}
          </h2>
          <h5>ROI</h5>
        </Col>
    </Container>
  );
}
