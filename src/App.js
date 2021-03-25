import React from 'react'

import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import useLocalStorage from './useLocalStorage'
import {TransactionCalculator} from './TransactionCalculator'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {

    const [transactions, setTransactions] = useLocalStorage('transactions', [])
    const [balance, setBalance] = useLocalStorage('balance', 0)
    const [income, setIncome] = useLocalStorage('income', 0)
    const [expense, setExpense] = useLocalStorage('expense',0)

  const handleReset = () => {
    setTransactions([])
    setIncome(0)
    setExpense(0)
    setBalance(0)
  }

  const handleAddTransaction = (text, amount) => {
    const result = TransactionCalculator(amount, balance, income, expense)
    const newTransaction = {
      id: transactions.length + 1,
      text,
      amount,
    }
    setTransactions((prevTransactions) => {
     return [...prevTransactions, newTransaction]
    })
    setIncome(result.income)
    setExpense(result.expense)
    setBalance(result.balance)
  }

   return (
     <Container>
       <Row>
         <Col lg/>
        <Col lg>
          <Header />
          <Balance balance={balance} />
          <TransactionList transactions={transactions} handleReset={handleReset}/>
          <IncomeExpenses income={income} expense={expense}/>
          <AddTransaction 
          handleAdd={handleAddTransaction}
          />
       </Col>
       <Col lg/>
       </Row>
      </Container>
)
   }

export default App;