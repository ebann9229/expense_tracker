import React from 'react'

import Pagination from 'react-bootstrap/Pagination'

export const Paginations = ({active, totalTransactions, handlePagination}) => {
  let items = []
  console.log(totalTransactions)
  for (let number=1; number <=Math.ceil(totalTransactions / 5); number++){
    items.push(
      <Pagination.Item onClick={() => handlePagination(number)} key={number} active={number===active}>{number}</Pagination.Item>
    )
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  )
}
