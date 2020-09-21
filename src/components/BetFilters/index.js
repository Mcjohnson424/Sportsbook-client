import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useEventFilteres from "../../hooks/useBetFilters";
import StatusInput from "../Form/StatusInput";
import BetTypeInput from "../Form/BetTypeInput";
import BetCategoryInput from "../Form/BetCategoryInput";
import SportInput from "../Form/SportInput";
import BetTargetInput from "../Form/BetTargetInput";
import LeagueInput from "../Form/LeagueInput";
import DateTimeRange from "./DateTimeRangeDropdown";
import get from "lodash/get";

export default function BetFilters() {
  const { filters, setFilters } = useEventFilteres();
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <Row>
        <Col lg={3} md={3} sm={3} sx={3}>
          <DateTimeRange />
        </Col>
        <Col lg={3} md={3} sm={3} sx={3}>
          <StatusInput
            onChange={handleChange}
            value={get(filters, "status_id")}
          />
        </Col>
        <Col lg={3} md={3} sm={3} sx={3}>
          <BetTypeInput
            onChange={handleChange}
            value={get(filters, "bet_type_id")}
          />
        </Col>
        <Col lg={3} md={3} sm={3} sx={3}>
          <BetCategoryInput
            onChange={handleChange}
            value={get(filters, "bet_category_id")}
          />
        </Col>
        <Col lg={3} md={3} sm={3} sx={3}>
          <SportInput
            onChange={handleChange}
            value={get(filters, "sport_id")}
          />
        </Col>
        <Col lg={3} md={3} sm={3} sx={3}>
          <BetTargetInput
            onChange={handleChange}
            value={get(filters, "bet_target_id")}
          />
        </Col>
        <Col lg={3} md={3} sm={3} sx={3}>
          <LeagueInput
            onChange={handleChange}
            value={get(filters, "league_id")}
          />
        </Col>
      </Row>
    </Container>
  );
}
