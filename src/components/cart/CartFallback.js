import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./CartFallback.module.css";
import { resetCart } from "../../store/store";

const CartFallback = ({ message, placed }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = () => {
    dispatch(resetCart());
    navigate("/products", { replace: true });
  };
  return (
    <div className={classes.fallback}>
      <h6>{message}</h6>
      <Button variant="primary" onClick={redirect}>
        {placed ? "Continue Shopping!" : "Order Now!"}
      </Button>
    </div>
  );
};

export default CartFallback;
