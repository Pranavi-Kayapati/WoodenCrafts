import React, { useState, useEffect } from "react";
import "./AdminPage.css";
import { IconContext } from "react-icons";
import AdminSidebar from "./admin components/AdminSidebar";
import AdminDashboard from "./admin components/AdminDashboard";
import AdminCart from "./admin components/AdminCart";
import AdminOrders from "./admin components/AdminOrders";
import AdminUsersList from "./admin components/Users/AdminUsersList";
import AdminProductList from "./admin components/Products/AdminProductList";
const AdminPage = () => {
  const [activeList, setActiveList] = useState("dashboord");

  useEffect(() => {
    console.log(activeList);
  }, [activeList]);

  return (
    <IconContext.Provider
      value={{
        color: "#f37a00",
        size: "20px",
        className: "global-class-name",
      }}
    >
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
    </IconContext.Provider>
  );
};

export default AdminPage;
