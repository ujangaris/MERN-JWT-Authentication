import { Spinner } from 'react-bootstrap'
import React from 'react'

export const Loader = () => {
  return (
    <Spinner
      animation='border'
      variant='primary'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
    ></Spinner>
  )
}
