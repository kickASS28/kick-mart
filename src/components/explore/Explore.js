import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Explore.module.css";
import { storeActions } from "../../store/store";
import ProductList from "../products/ProductList";

const Explore = () => {
  const categories = useSelector((state) => state.store.categories);
  const activeCategory = useSelector((state) => state.store.activeCategory);
  let products = useSelector((state) => state.store.products);
  products = products.filter((prod) => {
    let hasCat = prod.categories.map((cat) => cat.name === activeCategory);
    if (hasCat.includes(true)) {
      return true;
    }
    return false;
  });

  const dispatch = useDispatch();
  return (
    <Container className={classes.container}>
      <ListGroup horizontal>
        {categories.map((cat) => {
          return (
            <ListGroup.Item
              className={classes.listItem}
              variant={activeCategory === cat.name ? "primary" : null}
              key={cat.id}
              onClick={() => {
                dispatch(storeActions.setActiveCategory(cat.name));
              }}
            >
              {cat.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <ProductList products={products} header={activeCategory} />
    </Container>
  );
};

export default Explore;
