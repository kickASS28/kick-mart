import React from "react";
import { useDispatch } from "react-redux";
import Explore from "../components/explore/Explore";
import Commerce from "@chec/commerce.js";
import { APIKey } from "../constants/constants";
import { storeActions } from "../store/store";

const SearchPage = () => {
  const dispatch = useDispatch();
  const commerce = new Commerce(APIKey);

  commerce.categories.list().then((category) => {
    dispatch(storeActions.setLoading(true));
    dispatch(storeActions.setCategories(category.data));
    dispatch(storeActions.setLoading(false));
  });
  return (
    <div>
      <Explore />
    </div>
  );
};

export default SearchPage;
