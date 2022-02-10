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
        state.products.findIndex((i) => i._id === action.payload),
        1
      );
    },
    deleteProductFail: (state) => {
      state.isFetch = false;
      state.error = true;
    },
    updateProductsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((i) => i._id === action.payload.id)
      ] = action.payload.product;
    },
    updateProductFail: (state) => {
      state.isFetch = false;
      state.error = true;
    },
    addProductsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFail: (state) => {
      state.isFetch = false;
      state.error = true;
    },
  },
});

export const {
  getProductsStart,
  getProductSuccess,
  getProductFail,
  updateProductFail,
  updateProductSuccess,
  updateProductsStart,
  deleteProductFail,
  deleteProductSuccess,
  deleteProductsStart,
  addProductFail,
  addProductSuccess,
  addProductsStart,
} = productSlice.actions;

export default productSlice.reducer;
