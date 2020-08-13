import React,  { useState }  from 'react'
import { Container, Row, Col } from "react-bootstrap";

import { withRouter, useParams } from "react-router-dom";
import api from '../../../../common/api'
import useFetchApi from '../../../../hooks/useFetchApi';
import SportsBooksAccountForm from "../SportsBooksAccountForm";
import Error from "../../../Error";
import Loading from '../../../Loading'
import accounts from '../../../../common/api/accounts';

export default function SportsBooksAccountEditPage() {
    const {accountId}=useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const {data, loading : fetchLoading,error:fetchError}=useFetchApi(api.accounts.getById, {accountId});
    const onSubmit = async (data) => {
        setLoading(true);
        try {
          await api.accounts.updateById({accountId},data);
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
      if (fetchLoading) return <Loading />;
      console.log(data)
      return (
        <Container fluid={true}>
     
          <Row>
            <Col>
              <h2>Edit Sportbook account</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <SportsBooksAccountForm {...data}onSubmit={onSubmit}  />
            </Col>
          </Row>
        </Container>
      );
    return <Container fluid={true}>Sportsbooks Edit</Container>
}