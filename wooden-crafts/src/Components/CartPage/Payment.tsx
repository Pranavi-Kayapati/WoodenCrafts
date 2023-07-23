

import React, { useEffect, useState,SetStateAction } from 'react'
import {  useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

type initState={
    fullName:string;
    email:string;
    mobile:number;
    postalCoded:string;
    area:string;
    landmark?:string;
    state?:string;
}

const addresDetail={
    fullName:"",
    email:"",
    mobile:91,
    postalCoded:"",
    area:"",
    landmark:"",
    state:"",
}



export const Payment = () => {
   


    const [total,setTotal]=useState<SetStateAction<undefined>>()
    const [item,setItme]=useState<string>()
   

    const [address,setAddress]=useState<initState>(
        addresDetail
    )

    const [check,setChekc]=useState<boolean>(false)

    const navigate=useNavigate()

    const hanndleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setAddress((prev)=>{
            return {...prev,[name]:value}
        })
    }

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(address)
       if(!address.fullName || address.mobile===91 || address.email=="" || !address.postalCoded || !address.mobile){
        alert("Please fill all the field")
       }else{
        
        alert("Your data is saved click on Save")
        setChekc(true)
        setAddress(addresDetail)
       }

    }

    const handleChekcOut=()=>{
        if(check){
            navigate("/checkout")
        }else{
            alert("please fill the detail")
        }
       
    }

    let storedValue = localStorage.getItem('total')
    let length = localStorage.getItem('totalItem');


    useEffect(()=>{
       
      
    },[])

    return (
        <DIV >

            <div className="cart">

          
 
               
               <div className="cartleft1">
               <div className='deliveryADD'><b>Delivery & Billing Address</b></div>
               {/* <hr /> */}
               
               <form onSubmit={handleSubmit}>
                   <span><span className='detail'>Full Name*</span><input value={address.fullName} name='fullName' placeholder='eg Sharad Paradhi' onChange={(e)=>hanndleChange(e)}/></span>
                   <span><span className='detail'>Email*</span><input value={address.email} name='email' placeholder='eg shard@gmail.com'  onChange={(e)=>hanndleChange(e)}/></span>
                   <span><span className='detail'>Mobile Number*</span><input type='number' name='mobile' value={address.mobile} 
                    maxLength={10} placeholder='eg 7377727'  onChange={(e)=>hanndleChange(e)}/></span>
                   <span><span className='detail'>Postal Code*</span><input name='postalCoded' value={address.postalCoded} placeholder='eg spahle'  onChange={(e)=>hanndleChange(e)}/></span>
                   <span><span className='detail'>Area*</span><input value={address.area} name='area' placeholder='eg palghar'  onChange={(e)=>hanndleChange(e)}/></span>
                   <span><span className='detail'>LanndMark</span><input value={address.landmark} name='landmark' placeholder='eg pargoan'  onChange={(e)=>hanndleChange(e)}/></span>
                   <span><span className='detail'>State</span><input value={address.state}name='state' placeholder='eg maharashtra'
                    onChange={(e)=>hanndleChange(e)}/></span>
                    <button className='submitBtn' type='submit'>Submit</button>

               </form>

           </div>
               


                {/* ---------------------------------------------cart right side--------------------------------------------------- */}
                <div className="cartRight">
                    <div>
                        <span>Order Summary</span>
                        <div className="cupon">

                        </div>
                    </div>

                    <hr />

                    <div className="priceDetail">
                        <h1><b>Price Detail ({length})</b></h1>
                        <hr />
                        <span>MRP</span><span className="priceright">Rs {storedValue}</span>
                        <hr />
                        <span>Discount</span><span className="priceright"><span className="green">-Rs 2324</span></span>
                        <hr />
                        <span><b>Total Paybale</b></span><span className="priceright">Rs {storedValue}</span>
                        <hr />
                        <span className="green">Congratulations! You’ve just saved Rs 3,288 on your order.</span>
                    </div>
                    <div>
                        <button>No Cost EMI available. EMI starting Rs 1,483/month</button>
                    </div>
                    <div>
                        <button className="placeOrder" onClick={handleChekcOut}>Save Continue</button>

                    </div>
                </div>
            </div>
        </DIV >
    );

}


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
                                    .deliveryADD{
                                        text-align:left;
                                    padding:6px 2px;
  }
                                    hr{
                                        margin-top:20px;
                                    width: 100%;
  }


  form {
    display: flex;
    flex-direction:column;
    gap:40px;
    width: 100%;
    height: max-content;
    
  }
  .detail{
    position: absolute;
    left: 30px;
    margin-top:20px
      
  }
  form input{
   
    border:1px solid grey;
    padding:20px;
    margin-top: 17px;
    width: 65%;
    
  }

  .submitBtn{
    margin:auto;
    background-color: orange;
    color:white;
    width: 40%;
    padding: 5px;
    border-radius:5px;
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
                                    height: 5px;
                                    border: 1px solid grey;
                                    outline: none;
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
  .saveData h1{
    color:green;
  }


                                    `