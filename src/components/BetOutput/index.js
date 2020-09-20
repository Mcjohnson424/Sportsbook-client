import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfitOutput from "./ProfitOutput";

function BetOutput() {
  return (
    <Container fluid={true}>
      <Row>
        <Col >
          <ProfitOutput/>
        </Col>
       
      </Row>
    </Container>
  );
}
export default BetOutput;
