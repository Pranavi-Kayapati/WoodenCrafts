import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import AdminPage from "../AdminPage/AdminPage";
import SingleProductPage from "../SingleProductPage/SingleProductPage";
import LoginPage from "../Login-SignupPage/LoginPage";
import NotFoundPage from "../HomePage/NotFoundPage";
import CartPage from "../CartPage/CartPage";
import { Payment } from "../CartPage/Payment";
import MainProduct from "../ProductPage/MainProduct";


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/product" element={<MainProduct/>} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<Payment/>}/>
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </div>
  );
};

export default MainRoutes;
