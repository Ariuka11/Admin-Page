import axios from "axios";

const BASE_URL = "https://ecommerceapi-1.herokuapp.com/api/";

const TOKEN =
  localStorage.length > 0
    ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser?.accessToken
    : "";

console.log("TOKEN", TOKEN);
export const request = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `bearer ${TOKEN}` },
});
