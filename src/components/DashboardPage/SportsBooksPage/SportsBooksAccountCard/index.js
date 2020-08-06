import React from "react";
import { Card, Row, Col } from "react-bootstrap";

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
      <Card.Footer className="text-right"></Card.Footer>
    </Card>
  );
};

export default SportsBooksAccountCard;
