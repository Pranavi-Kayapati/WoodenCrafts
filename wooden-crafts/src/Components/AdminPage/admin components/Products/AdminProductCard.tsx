import React from "react";
import { Product } from "../../../constrainsts/Type";

const AdminProductCard = ({ item }: any) => {
  const {
    id,
    image,
    category,
    material,
    color,
    brand,
    title,
    price,
    description,
  }: Product = item;

  return (
    <div className="product-card">
      <div>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default AdminProductCard;
