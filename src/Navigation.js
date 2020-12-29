import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navigation.css'

function Navigation() {

  return (
    <Navbar>
      <Navbar.Brand href="/">Ben Mikailenko | Software Engineer</Navbar.Brand>
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
