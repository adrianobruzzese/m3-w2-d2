import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = () => (
  <Navbar expand="md" variant="dark" bg="primary" className="mb-4">
    <Container>
      <Navbar.Brand href="#home">BookZone</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto" style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#catalog">Catalog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavbar;
