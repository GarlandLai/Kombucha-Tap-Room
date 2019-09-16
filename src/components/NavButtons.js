import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Header from './Header';
import { Link } from 'react-router-dom'

function NavButtons(){
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/products"> Product List</Nav.Link>
          <Nav.Link href="/admin">Admin List</Nav.Link>
          <Nav.Link href="/new"> Add New Flavors</Nav.Link>
        </Nav>
      </Navbar>
      <Header/>
    </div>
  );
}

export default NavButtons;
