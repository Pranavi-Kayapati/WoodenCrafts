import React from "react";
import "./AdminPage.css";
const AdminPage = () => {
  return (
    <div className="AdminPage">
      <div className="admin-nav">navbar</div>
      {/* ==============      Admin Main Container Start      ================= */}
      <div className="admin-container">
        {/* ==============      Admin Sidebar Start      ================= */}
        <div className="admin-sidebar">side bar</div>
        {/* ==============      Admin Sidebar End      ================= */}
        {/* ==============      Admin Products Start      ================= */}
        <div className="admin-products">product container</div>
        {/* ==============      Admin Products End      ================= */}
        {/* ==============      Admin Add Products Start      ================= */}
        <div className="admin-addproduct">
          <h2 className="add-product">Add/Edit Product</h2>
          <div>
            <form className="admin-form">
              <input type="text" name="name" placeholder="Produt Name" />
              <select name="category" id="" placeholder="Category">
                <option value="">Category</option>
                <option value="sofa">Sofa</option>
                <option value="beds">Beds</option>
                <option value="kitchen">Kitchen and Dining</option>
                <option value="living">Living</option>
              </select>
              <input type="text" name="fabric" placeholder="Fabric" />
              <select name="color" id="">
                <option value="">Color</option>
                <option value="black">Black</option>
                <option value="brown">Brown</option>
                <option value="blue">Blue</option>
                <option value="gray">Gray</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="orange">Orange</option>
                <option value="pink">Pink</option>
              </select>
              <input type="text" name="img_url" placeholder="Image" />
              <input type="number" name="price" placeholder="Price" />
              <input type="text" name="discount" placeholder="Discount" />
              <select name="rating" id="">
                <option value="">Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button>Add Product</button>
            </form>
          </div>
        </div>
        {/* ==============      Admin Add Products End      ================= */}
      </div>
      {/* ==============      Admin Main Container End      ================= */}
    </div>
  );
};

export default AdminPage;
