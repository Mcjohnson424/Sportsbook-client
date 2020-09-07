import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useEventFilteres from "../../hooks/useBetFilters";
import StatusInput from "../Form/StatusInput";
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
      </Row>
    </Container>
  );
}
