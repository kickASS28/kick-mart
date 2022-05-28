import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { HiShoppingCart } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Navbar.module.css";

const Navigation = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="mb-5 py-3"
      fixed="top"
      expand="lg"
    >
      <Container className={classes.container}>
        <Navbar.Brand>Kick-Mart</Navbar.Brand>
        <Nav className="me-auto">
          <LinkContainer to="/products">
            <Nav.Link>Products</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/search">
            <Nav.Link>Explore</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to="/cart">
            <Nav.Link>
              <HiShoppingCart size={30} color="gold" />
              Cart
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
