import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ReactPR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/catalogue">Каталог</Nav.Link>
            <Nav.Link href="/overlay">Избранное</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header
