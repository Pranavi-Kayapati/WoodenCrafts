import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeProduct} from "../redux/cartReducer/action";
import {Product} from "../constrainsts/Type";
import styled from "styled-components"
import { Dispatch } from "redux";


interface CartItemProps {
  product: Product;
  quantity: number;
  setTotal:(a:any)=>void
}


const CartItem:React.FC<CartItemProps> = ({product,quantity=1,setTotal}) => {
 
  const dispatch = useDispatch();
  console.log(product.id)

  useEffect(()=>{
    setTotal((prev:any)=>prev+Number(product.price))
  },[])

 
  

  const handleRemoveFromCart = () => {
    if (quantity !== undefined) {
      //dispatch(removeProduct(product.id));
    };
  };

  const handleIncreaseQuantity = () => {
    console.log(product.id,product.price)
    //dispatch(increaseQuantity(product.id));
  };

  const handleDecreaseQuantity = () => {
   // dispatch(decreaseQuantity(product.id));
  };
  return (
    <DIV>
         <hr/>

<div className="cartItem">
            <div className="cartItemimage">
              <img src={product.image} alt="ErrorImage"/>
            </div>
            <div className="cartItemdetail">
              <div className="cartTitle"><h1><b>{product.title}</b></h1></div>
              <div className="cartQantity"><span>Quantity
               <span className="incDec">
                <button onClick={handleDecreaseQuantity}>-</button><span className="qauntity">{quantity}</span>
                <button onClick={handleIncreaseQuantity}>+</button>
               </span>
               <span className="price"><b>{`Rs ${product.price}`}</b> <span className="discount">Rs 100</span></span>
               <span className="cuponCode"><span className="saving">Save Rs 119 </span><h1>After applying coupon "MONSOON"</h1></span></span>
               </div>
              <div className="cartButton"><span className="saveforlater">Save for later</span> <span className="remove" onClick={handleRemoveFromCart}>Remove</span></div>
              
            </div>
          </div>

    </DIV>
    
  )
}

export default CartItem

const DIV=styled.div`
    
    
  
.cartItem{
  margin-top:15px;
  width: 100%;
  height: 200px;
  display: flex;
  gap:10px;
 
}

.cartItemimage{
  width: 30%;
  justify-content:center;
  align-items:center;
  position: relative;
 
}
.cartItemimage img{
  position: absolute;
  left: 0px;
  top:20px;
}
.cartItemdetail{
  width:70%;
  position: relative;
}
 
.cartItemdetail div{
  position: absolute;
  left: 0px;
  
}

.cartTitle{
  position:absolute;
  top:20px;
}

.cartQantity{
  position:absolute;
  top:80px;
  
}
.cartButton{
  position:absolute;
  bottom:20px;
}

.qant{
  padding: 0px;
  margin-left:15px;
  margin-right:10px;
  border:1px solid grey;
  padding:4px;
}

.incDec{
  margin: 10px;
  border: 1px solid grey;
  width: 30px;
  padding: 5px;
}
.incDec button{
  margin-left:10px;
  margin-right:10px;
  padding-left:2px;
  padding-right:2px;

}

.incDec button:hover{
  color: #FF9800;
}
.qauntity{
  border:1px solid gray;
  padding:5px 7px;

}
.price{
  margin-left:5px;
}
.discount{
  margin-left:5px;
}
.cuponCode{
  margin-left:15px;
}
.saving{
  color:orange
}
.cuponCode h1{
  position: absolute;
  right: -130px;
}

.remove{
  margin-left:50px;
}
.remove:hover{
  color:orange
}

`