import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { useNavigate } from 'react-router-dom'
import { logout } from '../slices/authSlice'
import { toast } from 'react-toastify'
export const Header = () => {
  // tampilkan nilai userInfo dengan hook useSelector
  const { userInfo } = useSelector((state) => state.auth)
  // deklar useDispatch
  const dispatch = useDispatch()
  // deklar useNavigate
  const navigate = useNavigate()
  //deklar useLogoutMutation
  const [logoutApiCall] = useLogoutMutation()
  // buat function logoutHandler
  const logoutHandler = async () => {
    try {
      // lakukan pemanggilan ke endpoint logout
      await logoutApiCall().unwrap()
      // kirim aksi logout ke authSlice
      dispatch(logout())
      navigate('/')
      // pasang toas untuk logout
      toast.info('Anda telah logout')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>MERN Auth</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <FaSignInAlt />
                      Sign In
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/register'>
                    <Nav.Link href='/register'>
                      <FaSignOutAlt />
                      Sign Up
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
