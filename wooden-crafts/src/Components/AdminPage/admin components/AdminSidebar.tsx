import React from "react";
import "../AdminPage.css";
import { FiShoppingCart } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { IconContext } from "react-icons";
import { FiUsers } from "react-icons/fi";
import { BsClipboard2Check } from "react-icons/bs";
import { LuLayoutList } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

type Props = {
  setActiveList: (activeList: string) => void;
};

const AdminSidebar = ({ setActiveList }: Props) => {
  const handleChangeActive = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setActiveList(e.currentTarget.value);
    // console.log(e.currentTarget.value);
  };

  return (
    <div className="admin-sidebar">
      <h1 className="heading">Admin</h1>
      <div className="admin-dashboard">
        <button
          className="sub-head"
          value={"dashboard"}
          onClick={handleChangeActive}
        >
          <LuLayoutDashboard />
          <span className="padd-15">Dashboard</span>{" "}
        </button>
        <button
          className="sub-head"
          value={"products"}
          onClick={handleChangeActive}
        >
          <LuLayoutList />
          <span className="padd-15">Products</span>
        </button>
        <button
          className="sub-head"
          value={"users"}
          onClick={handleChangeActive}
        >
          <FiUsers />
          <span className="padd-15">Users</span>
        </button>
        <button
          className="sub-head"
          value={"cart"}
          onClick={handleChangeActive}
        >
          <FiShoppingCart />
          <span className="padd-15">Cart</span>
        </button>
        <button
          className="sub-head"
          value={"orders"}
          onClick={handleChangeActive}
        >
          <BsClipboard2Check />
          <span className="padd-15">Orders Placed</span>
        </button>
        <button className="sub-head">
          <MdLogout />
          <span className="padd-15">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
