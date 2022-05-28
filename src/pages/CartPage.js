import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import CartItemList from "../components/cart/CartItemList";
import CartFallback from "../components/cart/CartFallback";

const CartPage = () => {
  const cart = useSelector((state) => state.store.cart);
  const totalItems = useSelector((state) => state.store.numberOfItems);
  return (
    <Container style={{ marginTop: "6rem", width: "50%", height: "50vh" }}>
      <h2>Order Summery</h2>
      <CartItemList cartItems={cart} />
      {totalItems === 0 && <CartFallback />}
    </Container>
  );
};

export default CartPage;
