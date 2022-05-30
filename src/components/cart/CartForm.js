import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartForm.module.css";
import { setLoading, setPlaced, setOrderError, placeOrder } from "../../store/store";

const CartForm = () => {
  const cart = useSelector((state) => state.store.cart);

  const dispach = useDispatch();

  const emailInpRef = useRef(),
    addressInpRef = useRef(),
    cityInpRef = useRef(),
    stateInpRef = useRef(),
    countryInpRef = useRef(),
    zipInpRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let email = emailInpRef.current.value.trim(),
      address = addressInpRef.current.value.trim(),
      city = cityInpRef.current.value.trim(),
      state = stateInpRef.current.value.trim(),
      country = countryInpRef.current.value.trim(),
      zip = zipInpRef.current.value.trim();
    if (
      email === "" ||
      address === "" ||
      city === "" ||
      state === "" ||
      country === "" ||
      zip === ""
    ) {
      dispach(
        setOrderError("Please enter valid details to proceed!")
      );
      return;
    } else {
      dispach(setLoading(true));
      dispach(setPlaced(true));
      dispach(
        placeOrder({
          email,
          address,
          city,
          state,
          country,
          zip,
          cart,
        })
      );
      dispach(setLoading(false));
    }
  };

  return (
    <Form className={classes.form} onSubmit={formSubmitHandler}>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="example@gmail.com"
          ref={emailInpRef}
        />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the Address"
          ref={addressInpRef}
        />
      </Form.Group>
      <div className={classes.smallInput}>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the City"
            ref={cityInpRef}
          />
        </Form.Group>
        <Form.Group controlId="state">
          <Form.Label>state</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the State"
            ref={stateInpRef}
          />
        </Form.Group>
      </div>
      <div className={classes.smallInput}>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Country"
            ref={countryInpRef}
          />
        </Form.Group>
        <Form.Group controlId="zip">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the Zip Code"
            ref={zipInpRef}
          />
        </Form.Group>
      </div>
      <Button type="submit" variant="success" className={classes.submitBtn}>
        Place Order
      </Button>
    </Form>
  );
};

export default CartForm;
