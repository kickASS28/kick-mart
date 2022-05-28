import React from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./CartForm.module.css";

const CartForm = () => {
  return (
    <Form className={classes.form}>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          autoComplete
          placeholder="example@gmail.com"
        />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          autoComplete
          placeholder="Enter the Address"
        />
      </Form.Group>
      <div className={classes.smallInput}>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter the City" />
        </Form.Group>
        <Form.Group controlId="state">
          <Form.Label>state</Form.Label>
          <Form.Control type="text" placeholder="Enter the State" />
        </Form.Group>
      </div>
      <div className={classes.smallInput}>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="Enter the Country" />
        </Form.Group>
        <Form.Group controlId="zip">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="number" placeholder="Enter the Zip Code" />
        </Form.Group>
      </div>
      <Button type="submit" variant="success" className={classes.submitBtn}>
        Place Order
      </Button>
    </Form>
  );
};

export default CartForm;
