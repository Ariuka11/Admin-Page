import axios from "axios";

const BASE_URL = "https://ecommerceapi-1.herokuapp.com/api/";

const TOKEN =
  localStorage.length > 1 &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    .accessToken;
export const request = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `bearer ${TOKEN}` },
});
