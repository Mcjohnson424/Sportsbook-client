import React from "react";
import { Chart } from "react-chartjs-2";
import { Container, Row, Col } from "react-bootstrap";
import { useCheckAuth } from "../../../react-check-auth";
import BetFilters from "../../BetFilters";
import withBetFilters from "../../../hocs/withBetFilters";
import useFetchApi from "../../../hooks/useFetchApi";
import api from "../../../common/api";
import useBetFilteres from "../../../hooks/useBetFilters";
import BetChart from "./BetChart";
import BetOutput from "../../BetOutput";

function MainPage() {
  const { userInfo } = useCheckAuth();
  const { filters } = useBetFilteres();
  const { data, loading, error } = useFetchApi(
    api.users.getBets,
    { userId: userInfo.id },
    {
      ...filters,
      startDate: filters.startDate.toISOString(),
      endDate: filters.endDate.toISOString(),
      eager: ["sport", "league"],
    },
    [filters]
  );
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <BetFilters />
        </Col>
      </Row>
      <Row>
        <Col>
          <BetOutput bets={data} />
        </Col>
      </Row>
      <Row>
        <Col>
          <BetChart bets={data} />
        </Col>
      </Row>
    </Container>
  );
}
export default withBetFilters(MainPage);
