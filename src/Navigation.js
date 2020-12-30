import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './styles/Navigation.css';

function Navigation() {

  return (
    <Navbar className='custom-navbar' variant='dark'>
      <Navbar.Brand className='custom-brand' href="/">Ben Mikailenko | Software Engineer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;
