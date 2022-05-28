import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from "./CartFallback.module.css";

const CartFallback = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/products", { replace: true });
  };
  return (
    <div className={classes.fallback}>
      <h6>No Items in the cart! Please order some..</h6>
      <Button variant="primary" onClick={redirect}>
        Order Now!
      </Button>
    </div>
  );
};

export default CartFallback;
