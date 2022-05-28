import React from "react";

import Product from "./Product";

import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./productlist.module.css";

import Container from "react-bootstrap/Container";

const ProductList = ({ products }) => {
  return (
    <Container>
      <div className={classes.grid}>
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </Container>
  );
};

export default ProductList;
