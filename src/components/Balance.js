import React from 'react'

export const Balance = ({balance}) => {
  console.log(balance);
  const variant = balance > 0 ? 'success' : 'danger'
  return (
    <>
      <h3 className="mt-4 ml-5 mb-2">My Balance</h3>
      <h5 className="ml-5 font-weight-bold">{balance} Birr</h5>
    <hr />
    </>
  ) 
}
