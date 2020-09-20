import React, { useStatus, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "../../Loading/index";
import api from "../../../common/api";
import Error from "../../Error";
import useFetchApi from "../../../hooks/useFetchApi";

export default function ProfitOutput({ bets = [] }) {
    console.log(bets)
    return (
      <Container >
        <Row>
<Col className='border border-1'>
         <h2> 123% </h2> 
         <h5>Profit</h5>
         </Col>
         </Row>
      </Container>
    );
  }

