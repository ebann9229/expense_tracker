import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const Transaction = ({transaction}) => {
  return (
  
    <Container fluid>
      <Row>
        <Col><p>{transaction.text}</p></Col>
        <Col className="text-right"><p>{transaction.amount}</p></Col>
      </Row>
    </Container>
    
  )
}
