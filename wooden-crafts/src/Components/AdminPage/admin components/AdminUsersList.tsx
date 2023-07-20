import React from "react";
import "../AdminPage.css";
const AdminUsersList = () => {
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
