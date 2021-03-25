import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


export const AddTransaction = ({handleAdd}) => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)


  return (
    <>
      <h3>Add new transaction</h3>
        <Form >
          <Form.Group>
            <Form.Label>Text</Form.Label>  
            <Form.Control required className="w-50" value={text} type="text" placeholder="Enter text" onChange={(e)=> setText(e.target.value)} />
          </Form.Group> 
          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control className="w-50" value={amount} type="number" placeholder="Enter amount" onChange={(e)=> setAmount(e.target.value)} />
            <Form.Text> Enter positive for income and negative for expenses</Form.Text>
          </Form.Group>
        <Button variant="outline-primary" onClick={() => handleAdd(text, amount)}>Add transaction</Button>
        </Form>
    </>
  )
}
