import React from "react";
import Explore from "../components/explore/Explore";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAndCats } from "../store/store";



const SearchPage = () => {
  const products = useSelector((state) =>state.store.products);

  const dispatch = useDispatch();

  if (products.length === 0) {
    dispatch(fetchProductsAndCats());
  }


  return (
    <div>
      <Explore />
    </div>
  );
};

export default SearchPage;
