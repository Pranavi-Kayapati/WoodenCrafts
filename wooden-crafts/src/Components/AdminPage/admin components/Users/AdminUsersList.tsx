import React, { useState, useEffect, Dispatch } from "react";
import "../../AdminPage.css";
import { User, UsersState } from "../../../constrainsts/Type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getUsers, postUser } from "../../../redux/adminReducer/action";
import UserCard from "./UserCard";
const initialState: User = {
  username: "",
  email: "",
  password: "",
};

const AdminUsersList = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [user, setUser] = useState(initialState);
  const store: UsersState = useSelector(
    (store: RootState) => store.usersReducer
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [store]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    let newUser = { ...user, [name]: value };
    setUser(newUser);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(postUser(user));

    setUser(initialState);
  };

  return (
    <div className="admin-users-list active">
      <div className="admin-users ">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Passowrd</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {store.users.map((user) => {
              return <UserCard key={user.id} item={user} setUser={setUser} />;
            })}
          </tbody>
        </table>
      </div>
      <div className="admin-adduser">
        <h2 className="add-product heading">Add/Edit User</h2>
        <div>
          <form className="admin-user-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={user.username}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => handleChange(e)}
            />
            <button>Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminUsersList;
