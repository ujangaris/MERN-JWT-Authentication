import React, { useEffect, useState } from 'react'
import { FormContainer } from './../components/FormContainer'
import { Button, Form, FormGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setCredentials } from '../slices/authSlice'
import { useUpdateUserMutation } from '../slices/usersApiSlice'
import { Loader } from './../components/Loader'

export const ProfileScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  // deklar navigate
  const navigate = useNavigate()

  // deklar dispatch
  const dispatch = useDispatch()

  //pasang useSelector
  const { userInfo } = useSelector((state) => state.auth)
  // custom hook login dengan useUpdateUserMutation
  const [updateProfile, { isLoading }] = useUpdateUserMutation()

  // pasang useEffect
  useEffect(() => {
    setName(userInfo.name)
    setEmail(userInfo.email)
  }, [userInfo.setName, userInfo.setEmail])

  const submitHandleer = async (e) => {
    e.preventDefault()
    // console.log('submit')
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      try {
        // console.log('submit')
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap()
        dispatch(setCredentials({ ...res }))
        toast.success('Profile updated successfully')
      } catch (err) {
        toast.error(err?.data.message || err.error)
      }
    }
  }
  return (
    <FormContainer>
      <h1>Update Profile</h1>
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </FormGroup>
        {isLoading && <Loader />}
        <Button type='submit' className='mt-3' variant='primary'>
          Update
        </Button>
      </Form>
    </FormContainer>
  )
}
