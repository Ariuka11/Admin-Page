import { request, userRequest } from "../axios";
import {
  addProductFail,
  addProductsStart,
  addProductSuccess,
  deleteProductFail,
  deleteProductsStart,
  deleteProductSuccess,
  getProductFail,
  getProductsStart,
  getProductSuccess,
  updateProductFail,
  updateProductsStart,
  updateProductSuccess,
} from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await request.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const res = await request.get("products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFail());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductsStart());
  try {
    // const res = await userRequest.delete(`products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFail());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductsStart());
  try {
    const res = await userRequest.post(`products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFail());
  }
};
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductsStart());
  try {
    const res = await userRequest.post(`products${id}`, { product });
    dispatch(updateProductSuccess(res.data));
  } catch (err) {
    dispatch(updateProductFail());
  }
};
