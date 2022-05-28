import React from "react";

import classes from "./product.module.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = ({ product }) => {
  return (
    <Card className={classes.popout}>
      <Card.Img src={product.assets[0].url} style={{ height: 300 + "px" }} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description.slice(3, product.description.length - 4)}
        </Card.Text>
        <Button variant="outline-primary" style={{ width: 100 + "%" }}>
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
