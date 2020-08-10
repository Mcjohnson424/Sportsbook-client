import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";
import * as ROUTES from "../../../../constants/routes";
const SportsBooksAccountCard = ({ account }) => {
  return (
    <Card>
      <Row className="no-glutter">
        <Col>
          <Card.Body className="p-4">
            <div className="m-auto">
              <h4 className="font-weight-bold">{account.username}</h4>
              <p className="text-muted">State: {account.state}</p>
              <p className="text-muted">Sportsbook: {account.sportsbook.name}</p>
            </div>{" "}
          </Card.Body>
        </Col>
      </Row>
       <Row>
        <Col>
          <Link to={ROUTES.DASHBOARD_SPORTSBOOKS_ACCOUNTS_GETDATA.as({accountId:account.id})}>
            <Button className="btn-default btn-focal;">Get data</Button>
          </Link>
        </Col>
      </Row>{" "}
      <Card.Footer className="text-right"></Card.Footer>
    </Card>
  );
};

export default SportsBooksAccountCard;
