import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import AdminPage from "../AdminPage/AdminPage";
import SingleProductPage from "../SingleProductPage/SingleProductPage";
import LoginPage from "../Login-SignupPage/LoginPage";
import NotFoundPage from "../HomePage/NotFoundPage";
import CartPage from "../CartPage/CartPage";
import MainProduct from "../ProductPage/MainProduct";
import SignUp from "../Login-SignupPage/SignupPage";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/product" element={<MainProduct/>} />
        <Route path="/product/:id" element={<PrivateRoute><SingleProductPage /></PrivateRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
