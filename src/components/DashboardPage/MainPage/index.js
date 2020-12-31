import React from "react";
import { Chart } from "react-chartjs-2";
import { Container, Row, Col } from "react-bootstrap";
import { useCheckAuth } from "../../../react-check-auth";
import BetFilters from "../../BetFilters";
import BetTable from "./OpenBetTable";
import withBetFilters from "../../../hocs/withBetFilters";
import useFetchApi from "../../../hooks/useFetchApi";
import api from "../../../common/api";
import useBetFilteres from "../../../hooks/useBetFilters";
import BetChart from "./BetChart";
import BetOutput from "../../BetOutput";
import clean from "../../../common/functions/clean";

function MainPage() {
  const { userInfo } = useCheckAuth();
  const { filters } = useBetFilteres();
  const { data, loading, error } = useFetchApi(
    api.users.getBets,
    { userId: userInfo.id },
    {
      ...clean(filters),
      startDate: filters.startDate.toISOString(),
      endDate: filters.endDate.toISOString(),
      eager: ["sport", "league"],
    },

    [filters]
  );
  const { data: openBets } = useFetchApi(
    api.users.getBets,
    { userId: userInfo.id },
    {
      status: "open",
      limit: 5,
      eager: ["event","sport", "league"],
    },

    []
  );

  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <BetFilters />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <BetOutput bets={data} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <BetChart bets={data} />
        </Col>
      </Row>
      <Row className="mt-3">
        <h3>Most Recent Open Bets</h3>
      </Row>
      <Row>
        <Col>
          <BetTable bets={openBets} />
        </Col>
      </Row>
    </Container>
  );
}
export default withBetFilters(MainPage);
