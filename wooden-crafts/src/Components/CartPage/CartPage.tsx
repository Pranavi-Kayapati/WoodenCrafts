import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/cartReducer/cartReducer";
import CartItem from "./CartItem";
import { Product } from "../constrainsts/Type";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { RequestAction, RequestError } from "../redux/ProductReducer/action";
import { getCartProduct } from "../redux/cartReducer/action";

// Helper function to calculate the total price of all items in the cart

// function calculateTotalPrice(data: { product: Product; quantity: number }[]): number {
//   let total = 0;
//   data.forEach((item) => {
//     const price = parseInt(item.product.price.replace(",", ""));
//     total += price * item.quantity;
//   });
//   return total;
// }

const CartPage: React.FC = () => {
  const [data, setData] = useState<any>();
  const [total, setTotal] = useState<any>(0);
  //const [qunatity,setQuantity]=useState<any>(1)

  // const cart = useSelector((store:any) => {
  //   console.log(store)
  //   return store.cartReducer.cart
  // })

  let dispatch = useDispatch();

  const FetchData = () => {
    console.log("reach");

    dispatch(RequestAction());
    axios
      .get("https://all-products-wjqd.onrender.com/cart")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        dispatch(getCartProduct(res.data));
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        dispatch(RequestError());
      });
  };

  useEffect(() => {
    FetchData();
    localStorage.setItem("total", JSON.stringify(total));
    localStorage.setItem("totalItem", JSON.stringify(data?.length));
  }, [total]);

  console.log(total);

  return (
    <DIV>
      <div className="cart">
        <div className="cartleft1">
          <div className="cartLeft">
            <div>
              <h2>
                <b>My Cart ({data?.length})</b>
              </h2>
            </div>

            <div className="cl2">
              {/* <BiMap/> */}
              <span className="deliver">Deliver to</span>
              <div className="check">
                <input placeholder="Enter PinCode" />
                <button>CHECK</button>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------cart itme----------------------------------------------------- */}

          {data?.map((item: any, ind: any) => (
            <CartItem
              key={ind}
              product={item.singleProduct}
              quantity={1}
              setTotal={setTotal}
              id={item.id}
              setData={setData}
            />
          ))}

          {/* <h1>total{calculateTotalPrice(data)}</h1> */}
        </div>

        {/* ---------------------------------------------cart right side--------------------------------------------------- */}
        <div className="cartRight">
          <h1>Order Details</h1>
          <div>
            <span>Have a Coupon Code ?</span>
            <div className="cupon">
              <input
                className="cuponCode"
                value={""}
                placeholder="Cupan Code"
              />
              <button>Apply</button>
            </div>
          </div>

          <hr />

          <div className="priceDetail">
            <h1>
              <b>Price Detail {data?.length}</b>
            </h1>
            <hr />
            <span>MRP</span>
            <span className="priceright">Rs {total}</span>
            <hr />
            <span>Discount</span>
            <span className="priceright">
              <span className="green">-Rs 2324</span>
            </span>
            <hr />
            <span>
              <b>Total Paybale</b>
            </span>
            <span className="priceright">Rs {total-2324}</span>
            <hr />
            <span className="green">
              Congratulations! You’ve just saved Rs 2,324 on your order.
            </span>
          </div>
          <div>
            <button>No Cost EMI available. EMI starting Rs 1,483/month</button>
          </div>
          <div>
            <button className="placeOrder">
              <Link to="/order">Place Order</Link>
            </button>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default CartPage;

const DIV = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 150px;
  * {
    margin-top: 0px;
    padding: 0px;
    box-sizing: 0px;
  }
  .check input{
    background-color:white
  }
  .cart {
    margin-top: 300px;
    display: flex;
    width: 100%;
    margin: auto;
    background-color: white;
  }
  .cartleft1 {
    width: 69%;
    padding: 15px;
    border: 1px solid grey;
    position: relative;
    overflow-wrap: none;
  }

  .cartLeft {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
  }
  .cl2 {
    position: absolute;
    right: 0px;
  }
  .cl2 input {
    width: 160px;
    border: none;
  }
  .deliver {
    margin-right: 40px;
  }
  .check {
    display: flex;
    align-items: center;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 5px;
    margin-right:10px;
    margin-bottom:20px
  }
  .check button {
    color: #ff9800;
  }

  /* ------------------------------------------------------cart right------------------------------------------------------  */

  .cartRight {
    width: 31%;
    border: 1px solid grey;
    height: max-content;
    text-align: left;
    background-color: white;
    padding: 5px;
  }
  .cartRight div {
    padding: 10px;
    left: 2px;
    width: 100%;
    position: relative;
  }
  .cupon {
    width: max-content;
  }
  .cupon input {
    width: 70%;
    padding: 5px;
    border: 1px solid grey;
  }
  .cuponCode {
    width: 70%;
    /* padding: 0px; */
    background-color:white;
    border: 1px solid grey;
  }
  .cupon button {
    width: 20%;
    border: 1px solid grey;
    margin-top: 4px;
    margin-left:5px;
    color: white;
    padding: 2px;
    background-color: orange;
  }

  .priceright {
    position: absolute;
    right: 6px;
  }
  .green {
    color: green;
  }
  hr {
    margin: auto;
    margin: 7px;
    width: 90%;
  }
  .placeOrder {
    text-align: center;
    padding: 10px;
    width: 100%;
    background-color: orange;
    color: white;
    border-radius: 3px;
  }
`;
