import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        
  <>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Booking.com </Navbar.Brand>
    <Nav className="me-auto">
   
    <CustomLink to="/">Home</CustomLink>
    <CustomLink to="/About">About </CustomLink>
    <CustomLink to="/Prodocut">Prodocut </CustomLink>
    <CustomLink to="/Contacts">Contacts</CustomLink>
    <CustomLink to="/Login">Login</CustomLink>
 
    </Nav>
    </Container>
  </Navbar>
</>
        
    );
};

export default Header;