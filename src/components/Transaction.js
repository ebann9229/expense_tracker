import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

export const Transaction = ({transaction}) => {
  return (
    <Alert variant="secondary">
    <Container fluid>
      <Row>
        <Col><p>{transaction.text}</p></Col>
        <Col className="text-right"><p>{transaction.amount}</p></Col>
      </Row>
    </Container>
    </Alert>
  )
}
