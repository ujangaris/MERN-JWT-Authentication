import React, { useState } from 'react'
import { FormContainer } from './../components/FormContainer'
import { Button, Col, Form, FormGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandleer = async (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandleer}>
        <FormGroup className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </FormGroup>
        <FormGroup className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </FormGroup>
        <Button type='submit' className='mt-3' variant='primary'>
          Sign In
        </Button>
        <Row className='py-3'>
          <Col>
            New Customer? <Link to='/register'>Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}
