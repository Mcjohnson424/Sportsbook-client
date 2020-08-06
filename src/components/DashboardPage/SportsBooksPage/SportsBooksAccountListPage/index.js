import React from "react";
import { Link } from "react-router-dom";
import {useCheckAuth} from '../../../../react-check-auth'
import { Container, Row, Col, Button } from "react-bootstrap";
import * as ROUTES from "../../../../constants/routes";
import useFetchApi from "../../../../hooks/useFetchApi";
import api from "../../../../common/api";
import Loading from '../../../Loading'
import Error from '../../../Error'

export default function SportsBooksAccountListPage() {
  const {userInfo}=useCheckAuth()
  const { data, error, loading } = useFetchApi(api.users.getAccounts,{userId:userInfo.id});
  if(loading){
  return <Loading />
  }
  return (
    <Container fluid={true}>
      {error&&<Error error={error}/>}
      List
      <Row>
        <Col>
          <Link to={ROUTES.DASHBOARD_SPORTSBOOKS_ACCOUNTS_CREATE.as()}>
            <Button>Create new</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
