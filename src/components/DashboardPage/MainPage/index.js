import React from "react";
import { Chart } from 'react-chartjs-2';
import { Container, Row, Col } from "react-bootstrap";
import { useCheckAuth } from "../../../react-check-auth";
import BetFilters from "../../BetFilters";
import withBetFilters from "../../../hocs/withBetFilters";
import useFetchApi from "../../../hooks/useFetchApi";
import api from "../../../common/api";
import useBetFilteres from "../../../hooks/useBetFilters";
import BetChart from "./BetChart";


function MainPage() {
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
      Dashboard
      </Col>
    </Row>
  <Row>
        <Col>
          <BetFilters />
        </Col>
      </Row>
      <Row>
        <Col>
        <BetChart />
        </Col>
      </Row>
      </Container>
      );
}
export default withBetFilters(MainPage);
