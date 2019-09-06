import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import NavSearch from './NavSearch'

function NavButtons(){
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#Notification">Notifications</Nav.Link>
          <Nav.Link href="#Messages">Messages</Nav.Link>
        </Nav>
        <NavSearch/>
      </Navbar>
    </div>
  );
}

export default NavButtons;
