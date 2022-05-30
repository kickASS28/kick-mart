import React from "react";
import ProductList from "../components/products/ProductList";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchProductsAndCats } from "../store/store";

const HomePage = () => {
  const isLoading = useSelector((state) => state.store.isLoading);
  const products = useSelector((state) => state.store.products);

  const dispatch = useDispatch();

  if(products.length === 0) {
    dispatch(fetchProductsAndCats())
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <ProductList products={products} header="All Products" />;
};

export default HomePage;
