import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const Explore = () => {
  const categories = useSelector((state) => state.store.categories);
  return (
    <Container>
      <ListGroup horizontal>
        {categories.map((cat) => {
          return <ListGroup.Item key={cat.id}>{cat.name}</ListGroup.Item>;
        })}
      </ListGroup>
    </Container>
  );
};

export default Explore;
