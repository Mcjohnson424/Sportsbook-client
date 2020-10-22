import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";
import Loading from "../../../Loading";
import api from "../../../../common/api";
import * as ROUTES from "../../../../constants/routes";
import { useCheckAuth } from "../../../../react-check-auth";
import Error from "../../../Error";

const SportsBooksAccountCard = ({ account, reload }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { accountInfo } = useCheckAuth();
  const handleDelete = async () => {
    setLoading(true);
    try {
      await api.accounts.deleteById(account.id);
      reload();
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  const handleGetData = async () => {
    setLoading(true);
    try {
      await api.accounts.getData(account.id);
      reload();
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  if (loading) return <Loading />;
  return (
    <Card>
      <Card.Body className="p-4">
        {error && <Error error={error} />}
        <div className="m-auto">
          <h4 className="font-weight-bold">{account.username}</h4>
          <p className="text-muted">State: {account.state}</p>
          <p className="text-muted">Sportsbook: {account.sportsbook.name}</p>
        </div>{" "}
      </Card.Body>
      <Row className="align-items-end p-4">
        <Col lg={8} md={8} xs={8} sm={8}></Col>
        <Col>
          <Button onClick={handleGetData} className="m-1">
            Get data once
          </Button>
          <Button className="m-1" onClick={handleDelete}>
            Delete
          </Button>
          <Link
            to={ROUTES.DASHBOARD_SPORTSBOOKS_ACCOUNTS_EDIT.as({
              accountId: account.id,
            })}
          >
            <Button className="m-1">Edit</Button>
          </Link>
        </Col>
      </Row>{" "}
      <Card.Footer className="text-right"></Card.Footer>
    </Card>
  );
};

export default SportsBooksAccountCard;
