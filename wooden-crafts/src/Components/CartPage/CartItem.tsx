import React ,{useState}from 'react'
import styled from "styled-components"

const CartItem = () => {
    const [quantity,setQunatity]=useState<number>(1)


  const handleAdd=()=>{
    setQunatity(prev=>prev+1)
  }

  const handleDec=()=>{
    setQunatity(prev=>prev-1)
  }
  return (
    <DIV>
         <hr/>

<div className="cartItem">
            <div className="cartItemimage">
              <img src="https://5.imimg.com/data5/ANDROID/Default/2023/6/321246373/NV/SP/GU/114532791/product-jpeg-500x500.jpeg" alt="ErrorImage"/>
            </div>
            <div className="cartItemdetail">
              <div className="cartTitle"><h1><b>bed come sofas kdijfiajia</b></h1></div>
              <div className="cartQantity"><span>Quantity
               <span className="incDec">
                <button onClick={handleDec}>-</button><span className="qauntity">{quantity}</span>
                <button onClick={handleAdd}>+</button>
               </span>
               <span className="price"><b>Rs 7999</b> <span className="discount">Rs 100</span></span>
               <span className="cuponCode"><span className="saving">Save Rs 119 </span><h1>After applying coupon "MONSOON"</h1></span></span>
               </div>
              <div className="cartButton"><span className="saveforlater">Save for later</span> <span className="remove">Remove</span></div>
              
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