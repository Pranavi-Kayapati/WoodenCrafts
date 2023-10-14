import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "../redux/cartReducer/action";
import { Product } from "../constrainsts/Type";
import styled from "styled-components";
import { Dispatch } from "redux";
import axios from "axios";

interface CartItemProps {
  id: number;
  product: Product;
  quantity: number;
  setTotal: (a: any) => void;
  setData: (b: any) => void;
}

const del = (id: number) => {
  axios
    .delete(`https://all-products-wjqd.onrender.com/cart/${id}`)
    .then((res) => {
      console.log("product is Removed");
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  product,
  quantity = 1,
  setTotal,
  setData,
}) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState<number>(1);

  console.log(product.price);
  let price: any = product.price.split(",").join("");
  price = Number(price);
  console.log(price);

  useEffect(() => {
    setTotal((prev: any) => prev + price);
  }, [count]);

  const FetchData = () => {
    axios
      .get("https://all-products-wjqd.onrender.com/cart")
      .then((res) => {
        console.log("product is Removed");
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemoveFromCart = async () => {
    //del(id)
    axios
      .delete(`https://all-products-wjqd.onrender.com/cart/${id}`)
      .then((res) => {
        FetchData();
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleIncreaseQuantity = () => {
    // axios.patch(`https://all-products-wjqd.onrender.com/cart/${id}`,{"price":price})
    // .then((res)=>{

    //   console.log(res.data)
    //   dispatch(increaseQuantity(res.data))

    let newprice: any = product.price.split(",").join("");
    newprice = Number(newprice);

    setCount((prev) => prev + 1);

    setTotal((prev: any) => prev + newprice);
    //dispatch(increaseQuantity(product.id))
  };

  const handleDecreaseQuantity = () => {
    console.log("work");
    console.log(price);

    setCount((prev) => prev - 1);
    setTotal((prev: any) => prev - price);
    // dispatch(decreaseQuantity(product.id));
  };
  return (
    <DIV>
      <div className="cartItem">
        <div className="cartItemimage">
          <img src={product.image} alt="ErrorImage" />
        </div>
        <div className="cartItemdetail">
          <div className="cartTitle">
            <h1>
              <b>{product.title}</b>
            </h1>
          </div>
          <div  className="cartQantity">
            <span>
              Quantity
              <span className="incDec">
                <button disabled={count === 1} onClick={handleDecreaseQuantity}>
                  -
                </button>
                <span className="qauntity">{count}</span>
                <button disabled={count === 5} onClick={handleIncreaseQuantity}>
                  +
                </button>
              </span>
              <span className="price">
                <b>{`Rs ${price}`}</b> <span className="discount">Rs 100</span>
              </span>
              <span className="cuponCode">
                <span className="saving">Save Rs 119 </span>
                <h1>After applying coupon "MONSOON"</h1>
              </span>
            </span>
          </div>

          <div className="cartButton">
            <span className="saveforlater">Save for later</span>{" "}
            <span className="remove" onClick={handleRemoveFromCart}>
              Remove
            </span>
          </div>
          <br />
        </div>
      </div>
    </DIV>
  );
};

export default CartItem;

const DIV = styled.div`
  .cartItem {
    /* margin-top: 15px; */
    border-top: 1px solid gray;
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: space-evenly;
    /* align-items: center; */
    gap: 10px;
  }
  span{
    border:none
  }
  .cartItemimage {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px
    
  }
  .cartItemimage img{
    height: 180px;
    width: 220px;
  }
  .cartItemdetail {
    width: 70%;
    
  }
  .cartTitle{
    margin-top:10px
  }
 

  .cartQantity {
    margin: 10px auto;
    padding: 10px;
    /* border:2px solid red; */
    top: 80px;
  }
  .cartButton {
   margin-top:-20px;
    bottom: 20px;
    margin-left:6px
  }
  */ .qant {
    padding: 0px;
    margin-left: 15px;
    margin-right: 10px;
    border: 1px solid grey;
    padding: 4px;
  }

  .incDec {
    margin: 10px;
    border: 1px solid grey;
    width: 25px;
    padding: 0 2px;
  }
  .incDec button {
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 2px;
    padding-right: 2px;
  }

  .incDec button:hover {
    color: #ff9800;
  }
  .qauntity {
    /* border: 1px solid gray; */
    padding: 5px 7px;
  }
  .price {
    margin-left: 5px;
  }
  .discount {
    margin-left: 5px;
  }
  .cuponCode {
    margin-left: 15px;
    border:none
  }
  .saving {
    border: 1px solid #ff9800;
    padding: 5px;
    color: orange;
  }
  .cuponCode h1 {
    margin-top:5px
  }

  .remove {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ff9800;
    margin-left: 50px;
    cursor: pointer;
  }
  .remove:hover {
    color: orange;
  }
`;
