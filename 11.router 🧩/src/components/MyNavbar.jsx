import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../img/logo.png";


const MyNavbar = () => {
  return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Link to="/"><img src={logo} alt="" /></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/">Home</Link>
                <Link to="/mentors">Mentors</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/contact">Contact</Link>
          
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default MyNavbar;