import React,{useEffect, useState} from "react";
import { styled } from "styled-components";
import { BiMap } from "react-icons/bi";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { getCartProducts } from "../redux/cartReducer/action";

const CartPage = () => {

  const [quantity,setQunatity]=useState<number>(1)

  const cart=useSelector((store:any)=>store.cartReducer.cart)
  const dispatch:any=useDispatch()
  console.log(cart)


  useEffect(()=>{
    dispatch(getCartProducts()).then((res:any)=>{
        console.log(res)
    })
  },[])


  return (
    <DIV>

      <div className="cart">

        <div className="cartleft1">

          <div className="cartLeft">
            <div >
              <h2><b>My Cart (0)</b></h2>
            </div>

            <div className="cl2">
              {/* <BiMap/> */}
             <span className="deliver">Deliver to
              </span>
              <span className="check">
                <input placeholder="Enter PinCode" />
                <button>CHECK</button>
              </span>
            </div>
          </div> 
       
         

          {/* -------------------------------------------------cart itme----------------------------------------------------- */}

       
          <CartItem />
           <CartItem/>
          <CartItem/>
          

          

        </div>


{/* ---------------------------------------------cart right side--------------------------------------------------- */}
        <div className="cartRight">
          <div>
            <span>Have a Coupon Code ?</span>
            <div className="cupon">
              <input placeholder="Cupan Code" />
              <button>Apply</button>
            </div>
          </div>

          <hr />

          <div className="priceDetail">
            <h1><b>Price Detail (3 items)</b></h1>
            <hr />
            <span>MRP</span><span className="priceright">Rs 2324</span>
            <hr />
            <span>Discount</span><span className="priceright"><span className="green">-Rs 2324</span></span>
            <hr />
            <span><b>Total Paybale</b></span><span className="priceright">Rs 2324</span>
            <hr />
            <span className="green">Congratulations! You’ve just saved Rs 3,288 on your order.</span>
          </div>
          <div>
            <button>No Cost EMI available. EMI starting Rs 1,483/month</button>
          </div>
          <div>
            <button className="placeOrder" ><Link to="/order">Place Order</Link></button>
            
          </div>
        </div>
      </div>
    </DIV >
  );
};

export default CartPage;

const DIV = styled.div`
  *{
    margin: 0px;
    padding:0px;
    box-sizing:0px;
   
  }
  .cart{
    display: flex;
    width: 80%;
    margin: auto;
    gap:20px;
    background-color:white;
  
  }
  .cartleft1{
   
    width: 69%;
    padding: 15px;
    border:1px solid grey;
    position: relative;
  }

 .cartLeft{
    display: flex;
    width: 100%;
    padding: 15px;
  }
 .cl2{
    position: absolute;
    right: 0px;
  }
  .cl2 input{
    width: 160px;
    border:none;
  }
  .deliver{
    margin-right:40px
  }
  .check{
    border:1px solid grey;
    border-radius:3px;
    padding:5px;
  }
  .check button{
    color:#FF9800;
   
  }



  /* ------------------------------------------------------cart right------------------------------------------------------  */
  
 .cartRight{
    width: 31%;
    border:1px solid grey;
    height: max-content;
    text-align: left;
    background-color:white;
    padding:5px;
  }
  .cartRight div{
   padding: 10px;
   left:2px;
   width: 100%;
   position:relative
  }
  .cupon{
    width:max-content;
  }
  .cupon input{
    width: 70%;
  padding: 5px;
  border: 1px solid grey;
  }
  .cupon button{
    width: 30%;
    border: 1px solid grey;
    color:white;
    padding:5px;
    background-color:orange;
   
  }

  .priceright{
    position: absolute;
    right: 6px;
  }
  .green{
    color:green;
  }
  hr{
    margin:5px;
  }
  .placeOrder{
    text-align: center;
    padding: 10px;
    width: 100%;
    background-color:orange;
    color:white;
    border-radius:3px;
  }

  
`
