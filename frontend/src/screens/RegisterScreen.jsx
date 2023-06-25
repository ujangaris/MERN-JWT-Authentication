import React, { useState } from 'react'
import { FormContainer } from './../components/FormContainer'
import { Button, Col, Form, FormGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submitHandleer = async (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandleer}>
        <FormGroup className='my-2' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </FormGroup>
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
        <FormGroup className='my-2' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter your confirm password'
            value={password}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </FormGroup>
        <Button type='submit' className='mt-3' variant='primary'>
          Sign Up
        </Button>
        <Row className='py-3'>
          <Col>
            Alreacy have an account? <Link to='/login'>Login</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}
