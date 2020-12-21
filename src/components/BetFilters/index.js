import React, { useContext } from "react";
import {
  Accordion,
  Container,
  Row,
  Col,
  Collapse,
  Button,
  AccordionContext,
  useAccordionToggle,
} from "react-bootstrap";
import useEventFilteres from "../../hooks/useBetFilters";
import StatusInput from "../Form/StatusInput";
import BetTypeInput from "../Form/BetTypeInput";
import BetCategoryInput from "../Form/BetCategoryInput";
import SportInput from "../Form/SportInput";
import BetTargetInput from "../Form/BetTargetInput";
import LeagueInput from "../Form/LeagueInput";
import DateTimeRange from "./DateTimeRangeDropdown";
import get from "lodash/get";
import format from "date-fns/format";

function CustomToggle({ eventKey }) {
  const currentEventKey = useContext(AccordionContext);
  const decoratedOnClick = useAccordionToggle(eventKey);

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Button className="btn-block" onClick={decoratedOnClick}>
      {isCurrentEventKey ? "Hide filters" : "Show filters"}
    </Button>
  );
}

export default function BetFilters() {
  const {
    filters,
    setFilters,
    statuses,
    leagues,
    sports,
    betTargets,
    betCategories,
    betTypes,
  } = useEventFilteres();

  const handleChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };
  const onFilterClear = (name) => {
    setFilters({ ...filters, [name]: undefined });
  };

  return (
    <Accordion>
      <Row className="mb-2">
        {filters.startDate && filters.endDate && (
            <Col lg={2} md={3} sm={12} xs={12} className="notif p-2 m-1">
              {`${format(filters.startDate, "d MMM")} - ${format(
                  filters.endDate,
                  "d MMM"
              )}`}
              <i
                  style={{ position: "absolute", top: 5, right: 5 }}
                  className="fa fa-times"
                  onClick={() => {
                    setFilters({ ...filters, startDate: null, endDate: null });
                  }}
              ></i>
            </Col>
        )}
        {Object.keys(filters)
            .filter(
                (key) => key !== "startDate" && key !== "endDate" && filters[key]
            )
            .map((key) => (
                <Col lg={2} md={3} sm={4} xs={12} className="notif p-2 m-1">
                  {key === "status_id" ? (
                      <>
                        {
                          statuses.find((status) => status.id === filters[key])
                              .status_name
                        }
                        <i
                            style={{ position: "absolute", top: 5, right: 5 }}
                            className="fa fa-times"
                            onClick={() => onFilterClear(key)}
                        ></i>
                      </>
                  ) : key === "bet_type_id" ? (
                      <>
                        {betTypes.find((s) => s.id === filters[key]).bet_type_name}
                        <i
                            style={{ position: "absolute", top: 5, right: 5 }}
                            className="fa fa-times"
                            onClick={() => onFilterClear(key)}
                        ></i>
                      </>
                  ) : key === "bet_category_id" ? (
                      <>
                        {
                          betCategories.find((s) => s.id === filters[key])
                              .bet_category_name
                        }
                        <i
                            style={{ position: "absolute", top: 5, right: 5 }}
                            className="fa fa-times"
                            onClick={() => onFilterClear(key)}
                        ></i>
                      </>
                  ) : key === "sport_id" ? (
                      <>
                        {sports.find((s) => s.id === filters[key]).sport_name}
                        <i
                            style={{ position: "absolute", top: 5, right: 5 }}
                            className="fa fa-times"
                            onClick={() => onFilterClear(key)}
                        ></i>
                      </>
                  ) : key === "bet_target_id" ? (
                      <>
                        {
                          betTargets.find((s) => s.id === filters[key])
                              .bet_target_name
                        }
                        <i
                            style={{ position: "absolute", top: 5, right: 5 }}
                            className="fa fa-times"
                            onClick={() => onFilterClear(key)}
                        ></i>
                      </>
                  ) : key === "league_id" ? (
                      <>
                        {leagues.find((s) => s.id === filters[key]).league_name}
                        <i
                            style={{ position: "absolute", top: 5, right: 5 }}
                            className="fa fa-times"
                            onClick={() => onFilterClear(key)}
                        ></i>
                      </>
                  ) : null}
                </Col>
            ))}
      </Row>
      <Row>
        <Col lg={2} md={3} sm={12} xs={12} style={{margin: '0 auto'}}>
          <CustomToggle eventKey="0" />
        </Col>
      </Row>

      <Accordion.Collapse eventKey="0">
        <Container>
          <Col>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <DateTimeRange />
              </Col>
              <Col lg={3} md={6} sm={12} xs={12}>
                <StatusInput
                  onChange={handleChange}
                  value={get(filters, "status_id")}
                />
              </Col>

              <Col lg={3} md={6} sm={12} xs={12}>
                <BetTypeInput
                  onChange={handleChange}
                  value={get(filters, "bet_type_id")}
                />
              </Col>

              <Col lg={3} md={6} sm={12} xs={12}>
                <BetCategoryInput
                  onChange={handleChange}
                  value={get(filters, "bet_category_id")}
                />
              </Col>
              <Col lg={3} md={6} sm={12} xs={12}>
                <SportInput
                  onChange={handleChange}
                  value={get(filters, "sport_id")}
                />
              </Col>
              <Col lg={3} md={6} sm={12} xs={12}>
                <BetTargetInput
                  onChange={handleChange}
                  value={get(filters, "bet_target_id")}
                />
              </Col>
              <Col lg={3} md={6} sm={12} xs={12}>
                <LeagueInput
                  onChange={handleChange}
                  value={get(filters, "league_id")}
                />
              </Col>
            </Row>
          </Col>
        </Container>
      </Accordion.Collapse>
    </Accordion>
  );
}
