import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfitOutput from "./ProfitOutput";
import ROIOutput from "./RoiOutput";
import WinOutput from "./WinOutput";

function BetOutput({ bets }) {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <ProfitOutput bets={bets} />
        </Col>
        <Col>
          <ROIOutput bets={bets} />
        </Col>
        <Col>
          <WinOutput bets={bets} />
        </Col>
      </Row>
    </Container>
  );
}
export default BetOutput;
