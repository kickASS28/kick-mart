import React from "react";
import { Container, Spinner } from "react-bootstrap";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <Container className={classes.container}>
      <Spinner
        animation="border"
        variant="primary"
        style={{ width: "4rem", height: "4rem" }}
      />
    </Container>
  );
};

export default LoadingSpinner;
