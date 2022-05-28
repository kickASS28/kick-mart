import React, { useRef } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  ListGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Explore.module.css";
import { storeActions } from "../../store/store";
import ProductList from "../products/ProductList";

const Explore = () => {
  const categories = useSelector((state) => state.store.categories);
  const activeCategory = useSelector((state) => state.store.activeCategory);
  const products = useSelector((state) => state.store.products);

  const searchInpRef = useRef();

  let shownProducts = products.filter((prod) => {
    let hasCat = prod.categories.map((cat) => cat.name === activeCategory);
    if (hasCat.includes(true)) {
      return true;
    }
    return false;
  });

  const searchHandler = () => {
    let query = searchInpRef.current.value.trim();
    if (query === "") {
      return;
    }
    shownProducts = products.filter((prod) =>
      JSON.stringify(prod).includes(query)
    );
  };

  const dispatch = useDispatch();
  return (
    <Container className={classes.container}>
      <div className={classes.filterbox}>
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
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            ref={shownProducts}
          />
          <Button variant="outline-primary" onClick={searchHandler}>
            Search
          </Button>
        </Form>
      </div>
      <ProductList products={shownProducts} header={activeCategory} />
    </Container>
  );
};

export default Explore;
