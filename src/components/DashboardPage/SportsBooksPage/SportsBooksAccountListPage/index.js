import React from "react";
import { Link } from "react-router-dom";
import { useCheckAuth } from "../../../../react-check-auth";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as ROUTES from "../../../../constants/routes";
import useFetchApi from "../../../../hooks/useFetchApi";
import api from "../../../../common/api";
import Loading from "../../../Loading";
import Error from "../../../Error";
import SportsBooksAccountCard from "../SportsBooksAccountCard";

export default function SportsBooksAccountListPage() {
  const { userInfo } = useCheckAuth();
  const { data, error, loading } = useFetchApi(
    api.users.getAccounts,
    {
      userId: userInfo.id,
    },
    { eager: ["sportsbook"] }
  );
  if (loading) {
    return <Loading />;
  }

  return (
    <Container fluid={true}>
      {error && <Error error={error} />}
      <Row>
        <Col>
          <h2>Sportbooks Accounts</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to={ROUTES.DASHBOARD_SPORTSBOOKS_ACCOUNTS_CREATE.as()}>
            <Button className="btn-block btn-focal">Create new</Button>
          </Link>
        </Col>
      </Row>{" "}
      <Row className="mt-2">
        <Col>
          {data.map((account) => (
            <SportsBooksAccountCard account={account} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
