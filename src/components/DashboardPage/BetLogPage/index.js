import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCheckAuth } from "../../../react-check-auth";
import BetFilters from "../../BetFilters";
import withBetFilters from "../../../hocs/withBetFilters";
import useFetchApi from "../../../hooks/useFetchApi";
import api from "../../../common/api";
import useBetFilteres from "../../../hooks/useBetFilters";
import BetTable from "./BetTable";

function BetLogPage() {
  const { userInfo } = useCheckAuth();
  const { filters } = useBetFilteres();
  const { data, loading, error } = useFetchApi(
    api.users.getBets,
    { userId: userInfo.id },
    { ...filters },
    [filters]
  );
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <h2>Bet Log</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <BetFilters />
        </Col>
      </Row>
      
      <Row>
        <Col>
          <BetTable bets={data} />
        </Col>
      </Row>
    </Container>
  );
}
export default withBetFilters(BetLogPage);
