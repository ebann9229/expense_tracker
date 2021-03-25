import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import { Transaction } from './Transaction'
import { Paginations } from './pagination'

export const TransactionList = ({transactions, handleReset}) => {
  const [tranPerPage, setTranPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1);

  transactions.sort((a,b) =>  b.id - a.id )
  const indexOfLastTransaction = currentPage * tranPerPage
  const indexOfFirstTransaction = indexOfLastTransaction - tranPerPage
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction)
 
  const handlePagination = (currPage) => {
    setCurrentPage(currPage)
  }


  return (
    <>
      <h3>Transaction History</h3>
        {transactions && 
        currentTransactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction} />)} 
        <Paginations 
          totalTransactions={transactions.length} 
          handlePagination={handlePagination}
          active={currentPage}/>
          <Button disabled={transactions.length===0} variant="danger" onClick={handleReset} >Reset History</Button>
          <hr />
    </>
  )
}
