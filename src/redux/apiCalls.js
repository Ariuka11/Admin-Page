import { request, userRequest } from "../axios";
import {
  deleteProductFail,
  deleteProductsStart,
  deleteProductSuccess,
  getProductFail,
  getProductsStart,
  getProductSuccess,
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
    const res = await userRequest.delete(`products/${id}`);
    dispatch(deleteProductSuccess(res.data));
  } catch (err) {
    dispatch(deleteProductFail());
  }
};
