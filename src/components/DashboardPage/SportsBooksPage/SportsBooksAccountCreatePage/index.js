import React,{useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap'

import SportsBooksAccountForm from "../SportsBooksAccountForm";

export default function SportsBooksAccountCreatePage() {
    const [loading,setLoading]=useState(false)
    const onSubmit = data => {
        setLoading(true);
        console.log(data)
       setLoading(false)
      };
    //return <Container fluid={true}>Sportsbooks Create</Container>
    return (
        <Container>
          <Row>
            <Col>
              <SportsBooksAccountForm onSubmit={onSubmit} />
            </Col>
          </Row>
        </Container>
      );
    };
