import React from "react";
import "../AdminPage.css";
import { BiSolidOffer } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FiUsers } from "react-icons/fi";
import { BsClipboard2Check } from "react-icons/bs";
import { LuLayoutList } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { LogoutSuccess } from "../../redux/authReducer/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type Props = {
  setActiveList: (activeList: string) => void;
};

const AdminSidebar = ({ setActiveList }: Props) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleLogout=()=>{
    dispatch(LogoutSuccess())
    navigate('/')
    
  }
  const handleChangeActive = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setActiveList(e.currentTarget.value);
    // console.log(e.currentTarget.value);
  };

  return (
    <div className="admin-sidebar">
      <h1 className="Admin-heading">Admin</h1>
      <div className="admin-dashboard">
        <div className="active-btn">
          <button
            className="sub-head"
            value={"dashboard"}
            onClick={handleChangeActive}
          >
            <BsGraphUp color="white" />
            <span className="padd-15">Dashboard</span>{" "}
          </button>
        </div>
        <div className="active-btn">
          <button
            className="sub-head"
            value={"products"}
            onClick={handleChangeActive}
          >
            <LuLayoutList color="white" />
            <span className="padd-15">Products</span>
          </button>
        </div>
        <div className="active-btn">
          <button
            className="sub-head"
            value={"users"}
            onClick={handleChangeActive}
          >
            <FiUsers color="white" />
            <span className="padd-15">Users</span>
          </button>
        </div>
        <div className="active-btn">
          <button
            className="sub-head"
            value={"cart"}
            onClick={handleChangeActive}
          >
            <BiSolidOffer color="white" />
            <span className="padd-15">Offers</span>
          </button>
        </div>
        <div className="active-btn">
          <button
            className="sub-head"
            value={"orders"}
            onClick={handleChangeActive}
          >
            <BsClipboard2Check color="white" />
            <span className="padd-15">Orders Placed</span>
          </button>
        </div>
        <div className="active-btn">
          <button className="sub-head">
            <MdLogout color="white" />
            <span className="padd-15" onClick={handleLogout}>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
