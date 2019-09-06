import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import NavSearch from './NavSearch';
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
          <Nav.Link href="/new"> Add New Flavors</Nav.Link>
          <Nav.Link href="/edit">Edit</Nav.Link>
        </Nav>
        <NavSearch/>
      </Navbar>
    <Header/>
    </div>
  );
}

export default NavButtons;
