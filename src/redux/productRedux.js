import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //Get All products
    getProductsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFail: (state) => {
      state.isFetch = false;
      state.error = true;
    },
    //Delete Product
    deleteProductsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((i) => i._id === action.payload.id),
        1
      );
    },
    deleteProductFail: (state) => {
      state.isFetch = false;
      state.error = true;
    },
  },
});

export const {
  getProductsStart,
  getProductSuccess,
  getProductFail,
  deleteProductFail,
  deleteProductSuccess,
  deleteProductsStart,
} = productSlice.actions;

export default productSlice.reducer;
