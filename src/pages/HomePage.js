import React from "react";
import ProductList from "../components/products/ProductList";
import { useSelector } from "react-redux";
import { APIKey } from "../constants/constants";
import { useDispatch } from "react-redux";
import { storeActions } from "../store/store";
import Commerce from "@chec/commerce.js";
import LoadingSpinner from "../components/LoadingSpinner";

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.store.isLoading);
  const commerce = new Commerce(APIKey);

  commerce.products.list().then((product) => {
    dispatch(storeActions.setLoading(true));
    dispatch(storeActions.setProducts(product.data));
    dispatch(storeActions.setLoading(false));
  });

  const products = useSelector((state) => state.store.products);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <ProductList products={products} header="All Products" />;
};

export default HomePage;
