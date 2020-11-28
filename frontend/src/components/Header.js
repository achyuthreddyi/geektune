import React from 'react'
import { Navbar, Container,  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand className='logo'>geektune</Navbar.Brand>
        </LinkContainer>

      </Container>
      
      
    </Navbar>
  )
}

export default Header
