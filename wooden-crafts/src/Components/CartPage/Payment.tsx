import React from 'react'
import { styled } from 'styled-components';


export const Payment = () => {

    return (
        <DIV>

            <div className="cart">

                <div className="cartleft1">
                    <div className='deliveryADD'><b>Delivery & Billing Address</b></div>
                    <hr />
                    
                    <form>
                        <span><span className='detail'>Full Name*</span><input placeholder='eg Sharad Paradhi'/></span>
                        <span><span className='detail'>Email*</span><input placeholder='eg Sharad Paradhi'/></span>
                        <span><span className='detail'>Mobile Number*</span><input placeholder='eg Sharad Paradhi'/></span>
                        <span><span className='detail'>Postal Code*</span><input placeholder='eg Sharad Paradhi'/></span>
                        <span><span className='detail'>Area*</span><input placeholder='eg Sharad Paradhi'/></span>
                        <span><span className='detail'>LanndMark</span><input placeholder='eg Sharad Paradhi'/></span>
                        <span><span className='detail'>State</span><input placeholder='eg Sharad Paradhi'/></span>

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
                        <button className="placeOrder" >Save Continue</button>

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
    padding: 10px;
   
    width: 65%;
    
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