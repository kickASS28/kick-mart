import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { HiShoppingCart } from "react-icons/hi";
import { FaBalanceScaleLeft } from "react-icons/fa";
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
        <Navbar.Brand>
          <LinkContainer to="/products">
            <span className={classes.brand}>
              <FaBalanceScaleLeft color="#FFFFFF" size={30} />
              Kick-Mart
            </span>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
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
                <span className={classes.cartIcon}>
                  <HiShoppingCart size={22.5} color="gold" />
                  Cart
                </span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
