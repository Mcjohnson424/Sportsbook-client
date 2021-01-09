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
      await api.sportsbooks.updateById(
        { sportbookId: account.sportsbook.id },
        account.sportsbook
      );
      reload();
      setLoading(false);
    } catch (e) {
      console.log(e);
      setCodeModal(true);
      setLoading(false);
      return;
    }
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
            <h4 className="font-weight-bold">{account.sportsbook.name}</h4>
            <p className="text-muted">State: {account.state}</p>
            <p className="text-muted">Username: {account.username}</p>
            <p className="text-muted">
              Last Updated:{" "}
              {account.sportsbook.lastUpdated
                ? format(
                    parseISO(account.sportsbook.lastUpdated),
                    "MM/dd/yyyy h:mm a z"
                  )
                : "N/A"}
            </p>
          </div>{" "}
        </Card.Body>
        <Row className="align-items-end p-4">
          <Col lg={5} md={0} xs={0} sm={0}></Col>
          <Col>
            <Button
              className="btn-block bth-focal"
              onClick={handleGetData}
              disabled={account.sportsbook.name === "Fanduel"}
            >
              Get data
            </Button>
          </Col>
          <Col>
            {" "}
            <Button className="btn-block bth-focal" onClick={handleDelete}>
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
              <Button className="btn-block bth-focal">Edit</Button>
            </Link>
          </Col>
        </Row>{" "}
        <Card.Footer className="text-right"></Card.Footer>
      </Card>
    </>
  );
};

export default SportsBooksAccountCard;
