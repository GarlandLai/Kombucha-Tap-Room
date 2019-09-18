import React from 'react';
import { NavLink } from 'react-router-dom'
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Header from './Header';


function NavButtons(){
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
    <NavItem>
    <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
    </NavItem>
    <NavLink to="/about" className="nav-link">About Us</NavLink>
    <NavLink to="/products" className="nav-link"> Product List</NavLink>
    <NavLink to="/admin" className="nav-link">Admin List</NavLink>
    <NavLink to="/new" className="nav-link"> Add New Flavors</NavLink>
    </Nav>
    </Navbar>
    <Header/>
    </div>
  );
}

export default NavButtons;
