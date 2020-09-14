import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useEventFilteres from "../../hooks/useBetFilters";
import StatusInput from "../Form/StatusInput";
import BetTypeInput from "../Form/BetTypeInput";
import BetCategoryInput from "../Form/BetCategoryInput";
import SportInput from "../Form/SportInput";
import BetTargetInput from "../Form/BetTargetInput";
import LeagueInput from "../Form/LeagueInput";
import get from "lodash/get";

export default function BetFilters() {
  const { filters, setFilters } = useEventFilteres();
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <Row>
        <Col>
          <StatusInput
            onChange={handleChange}
            value={get(filters, "status_id")}
          />
        </Col>
        <Col>
          <BetTypeInput
            onChange={handleChange}
            value={get(filters, "bet_type_id")}
          />
        </Col>
        <Col>
          <BetCategoryInput
            onChange={handleChange}
            value={get(filters, "bet_category_id")}
          />
        </Col>
        <Col>
          <SportInput
            onChange={handleChange}
            value={get(filters, "sport_id")}
          />
        </Col>
        <Col>
          <BetTargetInput
            onChange={handleChange}
            value={get(filters, "bet_target_id")}
          />
        </Col>
        <Col>
          <LeagueInput
            onChange={handleChange}
            value={get(filters, "league_id")}
          />
        </Col>
      </Row>
    </Container>
  );
}
