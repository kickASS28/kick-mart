import { createSlice, configureStore } from "@reduxjs/toolkit";
import { APIKey } from "../constants/constants";
import Commerce from "@chec/commerce.js";

const initialState = {
  products: [],
  cart: [],
  categories: [],
  isLoading: false,
  error: null,
  orderError: null,
  totalPrice: 0,
  numberOfItems: 0,
  placed: false,
  activeCategory: "Sports",
  product: null,
};

const stateSlice = createSlice({
  name: "store",
  initialState: initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    addToCart: (state, { payload }) => {
      if (state.placed) {
        state.totalPrice = 0;
        state.numberOfItems = 0;
      }
      state.placed = false;
      let existing = state.cart.find((product) => product.id === payload.id);
      if (existing) {
        state.cart.find((product) => product.id === payload.id).quantity +=
          payload.quantity;
        state.cart.find((product) => product.id === payload.id).itemPrice +=
          Math.round(payload.quantity * existing.price.raw, 2);
      } else {
        existing = state.products.find((product) => product.id === payload.id);
        state.cart.push({
          id: existing.id,
          price: existing.price,
          name: existing.name,
          quantity: payload.quantity,
          itemPrice: Math.round(payload.quantity * existing.price.raw, 2),
        });
      }
      state.totalPrice += existing.price.raw;
      state.numberOfItems += 1;
    },
    removeFromCart: (state, { payload }) => {
      let current = state.cart.find((product) => product.id === payload.id);
      let currentIndex = state.cart.findIndex(
        (product) => product.id === payload.id
      );
      if (current.quantity > 1) {
        current.quantity -= 1;
        current.itemPrice -= current.price.raw;
        state.cart[currentIndex] = current;
      } else {
        state.cart = state.cart.filter((product) => product.id !== payload.id);
      }
      state.numberOfItems -= 1;
      state.totalPrice -= current.price.raw;
    },
    setPlaced: (state, { payload }) => {
      state.placed = payload;
    },
    setOrderError: (state, { payload }) => {
      state.orderError = payload;
    },
    placeOrder: (state, { payload }) => {
      state.cart = [];
      // send orders to backend from here using thunk actions
      console.log(payload);
    },
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
    setActiveCategory: (state, { payload }) => {
      state.activeCategory = payload;
    },
    resetCart: (state) => {
      state.placed = false;
      state.totalPrice = 0;
      state.numberOfItems = 0;
    },
    setProduct: (state, { payload }) => {
      state.product = payload;
    },
  },
});

export const {
  addToCart,
  placeOrder,
  removeFromCart,
  resetCart,
  setActiveCategory,
  setCategories,
  setError,
  setLoading,
  setOrderError,
  setPlaced,
  setProducts,
  setProduct,
} = stateSlice.actions;

const store = configureStore({
  reducer: { store: stateSlice.reducer },
});

export function fetchProductsAndCats() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const commerce = new Commerce(APIKey);
      commerce.products.list().then((product) => {
        dispatch(setProducts(product.data));
      });
      commerce.categories.list().then((category) => {
        dispatch(setCategories(category.data));
      });
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function fetchSingleProduct(id) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const commerce = new Commerce(APIKey);
      commerce.products
        .retrieve(id)
        .then((product) => dispatch(setProduct(product)));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export default store;
