import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Footer() {

  return (
    <div className='fixed-bottom' style={{'paddingTop' : '64px'}}>
      <Navbar bg='light'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/">Projects</Nav.Link>
            <Nav.Link href="/">Dashboard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>   
  )
}

export default Footer;
