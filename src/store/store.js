import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { products: [], cart: [], isLoading: false, error: null };
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
      if (state.cart.findIndex((product) => product.id === payload.id) > 0) {
        state.cart.find((product) => product.id === payload.id).quantity += 1;
      } else {
        state.cart.push({
          ...state.products.find((product) => product.id === payload.id),
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, { payload }) => {
      if (state.cart.findIndex((product) => product.id === payload.id) > 0) {
        state.cart.find((product) => product.id === payload.id).quantity -= 1;
      } else {
        state.cart = state.cart.filter((product) => product.id !== payload.id);
      }
    },
  },
});

const store = configureStore({
  reducer: { store: stateSlice.reducer },
});

export const storeActions = stateSlice.actions;
export default store;
