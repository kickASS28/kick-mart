import React, { useRef } from "react";
import {
  Card,
  Container,
  Carousel,
  ListGroup,
  ListGroupItem,
  Form,
  Button,
} from "react-bootstrap";
import classes from "./ProductDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { storeActions } from "../../store/store";

const ProductDetails = ({ product }) => {
  const quantityInpRef = useRef();

  const error = useSelector((state) => state.store.error);
  console.log(error);

  const dispatch = useDispatch();

  const addtocartHandler = (e) => {
    e.preventDefault();
    const quantity = +quantityInpRef.current.value;
    if (quantity === 0) {
      dispatch(storeActions.setError("Please select the valid quantity!"));
      return;
    }
    if (quantity > product.inventory.available) {
      dispatch(
        storeActions.setError(
          "Quantity Must be less then or equal to available Stock!"
        )
      );
      return;
    }
    dispatch(storeActions.addToCart({ id: product.id, quantity }));
    dispatch(storeActions.setError(null));
  };

  return (
    <Container className={classes.productdetails}>
      <Card>
        <Carousel variant="dark">
          {product.assets.map((img, index) => {
            return (
              <Carousel.Item key={index}>
                <img src={img.url} width="100%" alt={img.filename} />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <Card.Body>
          <Card.Title className={classes.title}>
            <span>{product.name}</span>{" "}
            <span>{product.price.formatted_with_symbol}</span>
          </Card.Title>
          <Card.Text>
            {product.description.slice(3, product.description.length - 4)}
          </Card.Text>
          <ListGroup>
            <ListGroupItem className={classes.title}>
              <span>
                Digital Delivary:{" "}
                {product.has.digital_delivery ? "Available" : "NA"}
              </span>
              <span>
                Physical Delivary:{" "}
                {!product.has.physical_delivery ? "Available" : "NA"}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              In Stock: {product.inventory.available}
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
        <Card.Body>
          <Form onSubmit={addtocartHandler}>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <div className={classes.actions}>
                <Form.Control
                  type="number"
                  ref={quantityInpRef}
                  step={1}
                  defaultValue={1}
                />
                <Button variant="success" type="submit">
                  Add to Cart
                </Button>
              </div>
            </Form.Group>
          </Form>
          {error && (
            <Card.Text className="mt-3" style={{ color: "red" }}>
              {error}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetails;
