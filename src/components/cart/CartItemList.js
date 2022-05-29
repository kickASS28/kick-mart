import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ListGroup, Badge, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartItemList.module.css";
import { storeActions } from "../../store/store";

const CartItemList = ({ cartItems }) => {
  const totalPrice = useSelector((state) => state.store.totalPrice);
  const totalItems = useSelector((state) => state.store.numberOfItems);
  const dispach = useDispatch();

  return (
    <ListGroup as="ol" numbered className={classes.container}>
      <h2>Order Summery</h2>
      {cartItems.map((item, index) => {
        return (
          <ListGroup.Item key={index} as="li" className={classes.li}>
            <div className={classes.name}>
              <div className="fw-bold">{`${index + 1}. ${item.name}`}</div>
              {`${item.price.formatted_with_symbol} x ${item.quantity} Ps`}
            </div>
            <div className={classes.actions}>
              <Button
                variant="danger"
                onClick={() => {
                  dispach(storeActions.addToCart({ id: item.id, quantity: 1 }));
                }}
              >
                <FaPlus />
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  dispach(storeActions.removeFromCart({ id: item.id }));
                }}
              >
                <FaMinus />
              </Button>
            </div>
            <h3 className={classes.price}>
              <Badge bg="primary">{item.itemPrice} $</Badge>
            </h3>
          </ListGroup.Item>
        );
      })}
      {totalItems !== 0 && (
        <ListGroup.Item variant="info">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className={classes.info}
          >
            <h4>{`Total Items - ${totalItems}`}</h4>
            <h4>{`Total Price - ${totalPrice} $`}</h4>
          </div>
        </ListGroup.Item>
      )}
    </ListGroup>
  );
};

export default CartItemList;
