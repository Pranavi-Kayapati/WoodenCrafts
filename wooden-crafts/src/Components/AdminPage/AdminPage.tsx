import React, { useState, useEffect } from "react";
import "./AdminPage.css";
import Sidebar from "./admin components/Sidebar";
import AdminProductList from "./admin components/AdminProductList";
import AdminSidebar from "./admin components/AdminSidebar";
import AdminUsersList from "./admin components/AdminUsersList";
import AdminDashboard from "./admin components/AdminDashboard";
import AdminCart from "./admin components/AdminCart";
import AdminOrders from "./admin components/AdminOrders";
const AdminPage = () => {
  const [activeList, setActiveList] = useState("dashboord");

  useEffect(() => {
    console.log(activeList);
  }, [activeList]);

  return (
    <div className="AdminPage">
      <div className="admin-nav">navbar</div>
      {/* ==============      Admin Main Container Start      ================= */}
      <div className="admin-container">
        <AdminSidebar setActiveList={setActiveList} />
        {activeList == "dashboard" ? (
          <AdminDashboard />
        ) : activeList == "products" ? (
          <AdminProductList />
        ) : activeList == "users" ? (
          <AdminUsersList />
        ) : activeList == "cart" ? (
          <AdminCart />
        ) : (
          <AdminOrders />
        )}
        {/* <AdminUsersList /> */}
      </div>
      {/* ==============      Admin Main Container End      ================= */}
    </div>
  );
};

export default AdminPage;
