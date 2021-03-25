import React from 'react'

import Alert from 'react-bootstrap/Alert'

export const Balance = ({balance}) => {
  const variant = balance > 0 ? 'success' : 'danger'
  return (
    <>
    <Alert variant={variant} style={{height: '150px'}}>
      <Alert.Heading variant="secondary" className="mt-4 ml-5 mb-2">My Balance</Alert.Heading>
      <h5 className="ml-5 font-weight-bold">{balance} Birr</h5>
    </Alert>
    <hr />
    </>
  ) 
}
