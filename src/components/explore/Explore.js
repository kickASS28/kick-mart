import React, { useEffect, useRef, useState } from "react";
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

  let [shownProducts, setShownProducts] = useState(products);

  useEffect(() => {
    setShownProducts(
      products.filter((prod) => {
        let hasCat = prod.categories.map((cat) => cat.name === activeCategory);
        if (hasCat.includes(true)) {
          return true;
        }
        return false;
      })
    );
  }, [activeCategory, products]);

  const searchHandler = (e) => {
    e.preventDefault();
    let query = searchInpRef.current.value.trim();
    if (query === "") {
      return;
    }
    setShownProducts(
      products.filter((prod) => {
        let str = JSON.stringify(prod).toLowerCase();
        if (str.includes(query.toLowerCase())) {
          return true;
        }
        return false;
      })
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
        <Form className="d-flex" onSubmit={searchHandler}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            ref={searchInpRef}
          />
          <Button variant="outline-primary" type="submit">
            Search
          </Button>
        </Form>
      </div>
      <ProductList
        products={shownProducts}
        header="Handpicked for your needs!"
      />
    </Container>
  );
};

export default Explore;
