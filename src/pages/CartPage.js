import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import CartItemList from "../components/cart/CartItemList";
import CartFallback from "../components/cart/CartFallback";
import CartForm from "../components/cart/CartForm";

const CartPage = () => {
  const cart = useSelector((state) => state.store.cart);
  const totalItems = useSelector((state) => state.store.numberOfItems);
  const placed = useSelector((state) => state.store.placed);
  return (
    <Container style={{ marginTop: "6rem", width: "50%" }}>
      <h2>Order Summery</h2>
      <CartItemList cartItems={cart} />
      {totalItems === 0 && (
        <CartFallback message="No Items in the cart! Please order some.." />
      )}
      {totalItems !== 0 && !placed && <CartForm />}
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
