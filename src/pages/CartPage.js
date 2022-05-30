import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import CartItemList from "../components/cart/CartItemList";
import CartFallback from "../components/cart/CartFallback";
import CartForm from "../components/cart/CartForm";
import classes from "./CartPage.module.css";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchProductsAndCats } from "../store/store";

const CartPage = () => {
  const cart = useSelector((state) => state.store.cart);
  const totalItems = useSelector((state) => state.store.numberOfItems);
  const placed = useSelector((state) => state.store.placed);
  const isLoading = useSelector((state) => state.store.isLoading);
  const products = useSelector((state) => state.store.products);

  const dispatch = useDispatch();

  if (products.length === 0) {
    dispatch(fetchProductsAndCats());
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Container className={classes.container}>
      <CartItemList cartItems={cart} />
      {totalItems === 0 && (
        <CartFallback message="No Items in the cart! Please order some.." />
      )}
      {cart.length !== 0 && !placed && <CartForm />}
      {placed && (
        <CartFallback
          message="Your order was placed successfully, Thank you for shopping with us :)"
          placed
        />
      )}
    </Container>
  );
};

export default CartPage;
