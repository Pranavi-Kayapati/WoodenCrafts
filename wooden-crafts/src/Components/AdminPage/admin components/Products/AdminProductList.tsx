import React, { useEffect, useState } from "react";
import "../../AdminPage.css";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, postProduct } from "../../../redux/adminReducer/action";
import { Product, ProductsState } from "../../../constrainsts/Type";
import { RootState } from "../../../redux/store";
import AdminProductCard from "./AdminProductCard";

const initialState: Product = {
  image: "",
  category: "",
  material: "",
  color: "",
  brand: "",
  title: "",
  price: "",
  description: {
    "Monsoon Sale":
      " Apply Coupon MONSOON & Get Upto 20% Off (price inclusive of discount) T&C",
    "Store Discount":
      "Get upto 10% off on orders placed at your nearest experience stores T&C",
    "No Cost EMI":
      "Starting from Rs 5,269 on ICICI, Axis, Kotak, HDFC, SBI & More",
  },
};

const AdminProductList = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [product, setProduct] = useState(initialState);
  const store: ProductsState = useSelector(
    (store: RootState) => store.adminproductReducer
  );
  let paramsObj = {
    params: {},
  };

  useEffect(() => {
    dispatch(getProducts(paramsObj));
  }, [store]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    let newProduct = { ...product, [name]: value };
    setProduct(newProduct);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(product);
    dispatch(postProduct(product));
    setProduct(initialState);
  };

  return (
    <div className="admin-product-list active">
      <div className="admin-products ">
        {store.products.map((product) => {
          return <AdminProductCard key={product.id} item={product} />;
        })}
      </div>
      <div className="admin-addproduct">
        <h2 className="add-product heading">Add/Edit Product</h2>
        <div>
          <form className="admin-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={product.title}
              placeholder="Produt Name"
              onChange={(e) => handleChange(e)}
            />
            <input
              name="category"
              id=""
              value={product.category}
              placeholder="Category"
              onChange={(e) => handleChange(e)}
            />

            <input
              type="text"
              name="material"
              value={product.material}
              placeholder="Fabric"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="color"
              placeholder="Color"
              value={product.color}
              id=""
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="image"
              placeholder="Image"
              value={product.image}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={product.price}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="brand"
              value={product.brand}
              placeholder="Brand"
              onChange={(e) => handleChange(e)}
            />
            <button>Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProductList;
