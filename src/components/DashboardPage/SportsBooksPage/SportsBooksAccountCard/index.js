import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button, Alert } from "react-bootstrap";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import Loading from "../../../Loading";
import api from "../../../../common/api";
import * as ROUTES from "../../../../constants/routes";
import { useCheckAuth } from "../../../../react-check-auth";
import Error from "../../../Error";
import CodeModal from "../CodeModal";

const SportsBooksAccountCard = ({ account, reload }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [codeModal, setCodeModal] = useState(false);
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
    setSuccess(false);
    setLoading(true);
    try {
      const { data } = await api.accounts.getData(account.id);
      await api.sportsbooks.updateById(account.sportsbook.id);
      reload();
    } catch (e) {
      setCodeModal(true);
    }
    setLoading(false);
    setSuccess(true);
  };
  if (loading)
    return (
      <>
        <p className="text-center">Retrieving data</p>
        <Loading />
      </>
    );
  return (
    <>
      {success && (
        <Alert variant="success">Data was fetched successfully!</Alert>
      )}
      {codeModal && (
        <CodeModal show={codeModal} handleClose={() => setCodeModal(false)} />
      )}
      <Card>
        <Card.Body className="p-4">
          {error && <Error error={error} />}
          <div className="m-auto">
            <h4 className="font-weight-bold">{account.username}</h4>
            <p className="text-muted">State: {account.state}</p>
            <p className="text-muted">Sportsbook: {account.sportsbook.name}</p>
            <p className="text-muted">
              Last Updated:{" "}
              {format(
                parseISO(account.sportsbook.lastUpdated),
                "dd/MM/yyyy hh:mm"
              )}
            </p>
          </div>{" "}
        </Card.Body>
        <Row className="align-items-end p-4">
          <Col lg={8} md={6} xs={0} sm={0}></Col>
          <Col>
            <Button
              onClick={handleGetData}
              className="m-1"
              disabled={account.sportsbook.name === "Fanduel"}
            >
              Get data
            </Button>
          </Col>
          <Col>
            {" "}
            <Button className="m-1" onClick={handleDelete}>
              Delete
            </Button>
          </Col>
          <Col>
            {" "}
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
    </>
  );
};

export default SportsBooksAccountCard;
