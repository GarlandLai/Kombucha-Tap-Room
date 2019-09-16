import React from 'react';
import {Link} from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';
import Header from './Header';


function NavButtons(){
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products"> Product List</Link>
          <Link to="/admin">Admin List</Link>
          <Link to="/new"> Add New Flavors</Link>
        </Nav>
      </Navbar>
      <Header/>
    </div>
  );
}

export default NavButtons;
