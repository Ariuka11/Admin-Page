import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/UserList";
import NewUser from "./pages/newUser/NewUser";
import User from "./pages/user/User";
import ProductList from "./pages/productlist/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="users" element={<UserList />} />
        <Route path="user/:id" element={<User />} />
        <Route path="newUser" element={<NewUser />} />
        <Route path="products" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="newProduct" element={<NewProduct />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
