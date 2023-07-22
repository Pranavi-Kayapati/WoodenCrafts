import React, { useState, useEffect, Dispatch } from "react";
import "../../AdminPage.css";
import { User, UsersState } from "../../../constrainsts/Type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getUsers } from "../../../redux/adminReducer/action";
const initialState: User = {
  username: "",
  email: "",
  password: "",
};

const AdminUsersList = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [user, setUser] = useState(initialState);
  const store: UsersState = useSelector(
    (store: RootState) => store.adminproductReducer
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [store]);

  return (
    <div className="admin-users-list active">
      <div className="admin-users ">Users</div>
      <div className="admin-adduser">
        <h2 className="add-product heading">Add/Edit User</h2>
        <div>
          <form className="admin-user-form">
            <input type="text" name="name" placeholder="User Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="img_url" placeholder="Image" />
            <button>Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminUsersList;
