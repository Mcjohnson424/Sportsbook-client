import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfitOutput from "./ProfitOutput";
import ROIOutput from "./RoiOutput";
import WinOutput from "./WinOutput";
import BetsOutput from "./BetsOutput";
import BetAmountOutput from "./BetAmountOutput";

function BetOutput({ bets }) {
  return (
    <Container fluid={true}>
      <Row>
        <Col lg={6} md={6} sm={6} xs={6}>
          <BetsOutput bets={bets} />
        </Col>
        <Col lg={6} md={6} sm={6} xs={6}>
          <BetAmountOutput bets={bets} />
        </Col>
        <Col lg={4} md={4} sm={4} xs={4}>
          <ProfitOutput bets={bets} />
        </Col>
        <Col lg={4} md={4} sm={4} xs={4}>
          <ROIOutput bets={bets} />
        </Col>
        <Col lg={4} md={4} sm={4} xs={4}>
          <WinOutput bets={bets} />
        </Col>
      </Row>
    </Container>
  );
}
export default BetOutput;
