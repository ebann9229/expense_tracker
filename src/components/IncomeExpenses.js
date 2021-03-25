import React from 'react'

import ProgressBar from 'react-bootstrap/ProgressBar'
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const IncomeExpenses = ({income, expense}) => {
  
  const incomePercentage = (income * 100) / (income - expense)
  const expensePercentage = (-expense * 100) / (income - expense)

  return (
    <>
    <Container className="mt-5 mb-4">
      <Row>
        <Col><h3>Income & Expense</h3></Col>
      </Row>
      <Row>
        <Col>
          <ProgressBar >
            <ProgressBar striped key={1} now={incomePercentage} />
            <ProgressBar striped key={2} now={expensePercentage} variant="warning" />
          </ProgressBar>
        </Col>
      </Row>
      <Row>
        <Col>
           <h1><Badge variant="primary">IN</Badge></h1>
            <h5>{income} Birr</h5>
        </Col>
        <Col className="text-right">
           <h1 ><Badge variant="warning">EX</Badge></h1>
          <h5>{expense} Birr</h5> 
          </Col>  
      </Row>
    </Container>
    <hr />
    </>
  )
}
