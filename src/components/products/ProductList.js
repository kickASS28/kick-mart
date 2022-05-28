import React from "react";

import Product from "./Product";

import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./productlist.module.css";

import Container from "react-bootstrap/Container";

const ProductList = ({ products }) => {
  return (
    <Container className={classes.container}>
      <h3>Our Products</h3>
      <div className={classes.grid}>
        {products.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
      </div>
    </Container>
  );
};

export default ProductList;
