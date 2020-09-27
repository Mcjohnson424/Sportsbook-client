import React from "react";
import { Accordion, Container, Row, Col, Collapse, Button } from "react-bootstrap";
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
  const StatusClear = () => {
    setFilters({ ...filters, ['status_id'] : null });
  };
  
  return (

 <Accordion>
  
  <Col>
   <Accordion.Toggle as={Button} eventKey="0">
      Show Filters
      </Accordion.Toggle>
      </Col>
      
      <Accordion.Collapse eventKey="0">
    
      <Container>
        <Col>
       <Row>
        <Col lg={3} md={3} sm={3} sx={3}>
          <DateTimeRange />
          
        </Col>
        <Button variant='link'>
          <i className="fa fa-times"></i>
          </Button >
        <Col lg={3} md={3} sm={3} sx={3}>
          <StatusInput
            onChange={handleChange}
            value={get(filters, "status_id")}
          />
        </Col>
        <Button  
        variant='link'
        onClick={StatusClear}
        >
          <i className="fa fa-times"></i>
          </Button >
        <Col lg={3} md={3} sm={3} sx={3}>
          <BetTypeInput
            onChange={handleChange}
            value={get(filters, "bet_type_id")}
          />
        </Col>
        <Button variant='link'>
          <i className="fa fa-times"></i>
          </Button >
        <Col lg={3} md={3} sm={3} sx={3}>
          <BetCategoryInput
            onChange={handleChange}
            value={get(filters, "bet_category_id")}
          />
        </Col>
        <Button variant='link'>
          <i className="fa fa-times"></i>
          </Button >
        <Col lg={3} md={3} sm={3} sx={3}>
          <SportInput
            onChange={handleChange}
            value={get(filters, "sport_id")}
          />
        </Col>
        <Button variant='link'>
          <i className="fa fa-times"></i>
          </Button >
        <Col lg={3} md={3} sm={3} sx={3}>
          <BetTargetInput
            onChange={handleChange}
            value={get(filters, "bet_target_id")}
          />
        </Col>
        <Button variant='link'>
          <i className="fa fa-times"></i>
          </Button >
        <Col lg={3} md={3} sm={3} sx={3}>
          <LeagueInput
            onChange={handleChange}
            value={get(filters, "league_id")}
          />
        </Col>
        <Button variant='link'>
          <i className="fa fa-times"></i>
          </Button >
    
      </Row>
      </Col>
    </Container>
    
    
      </Accordion.Collapse>
  
    </Accordion>
  );
}
