import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      as={motion.nav}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOAKzgwI8G1PIYhVy2_LSAjlvnOUJO63jk0g&s"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            MyWebPage
          </motion.div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="mx-2" whileHover={{ scale: 1.1 }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2" whileHover={{ scale: 1.1 }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2" whileHover={{ scale: 1.1 }}>
              Contact
            </Nav.Link>
          </Nav>
          <Button variant="outline-light" as={motion.button} whileHover={{ scale: 1.1 }}>
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
