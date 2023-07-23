import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"

type detail={
    cardNumber:string;
    month:string;
    year:string;
    cvv:string;
}

const CheckOut = () => {

    const [cardDetail,setCartDetail]=useState<detail>(
        {
            cardNumber:"",
             month:"",
             year:"",
             cvv:"",
        }
    )

    const handleChagne=(e:React.ChangeEvent<HTMLInputElement> )=>{
        const {name,value}=e.target
        setCartDetail((prev)=>{
            return {...prev,[name]:value}
        })
    }

    const handleChanges=(e:React.ChangeEvent<HTMLSelectElement> )=>{
        const {name,value}=e.target
        setCartDetail((prev)=>{
            return {...prev,[name]:value}
        })

    }


    const navigate=useNavigate()


    const handlePlace=()=>{
        alert("Are sure continue paument click ok")
        navigate("/product")
    }

    return (
        <DIV>
           

    <div className='checkout'>
        <div className='cartOption'>
            <input type="radio" className="radiobtn" name="OTHERS" id="Credit" checked />
            <span>Credit / Debit / ATM Card</span>
        </div>
        <div className='cardNumber'>
         <input type='text' value={cardDetail.cardNumber} name='cardNumber' placeholder='ENTER YOUR CARD NUMBER' maxLength={16} onChange={handleChagne}/>
        </div>
        <div className='detail'>
            <span>Month
            <select value={cardDetail.month} className="month" name="month" onChange={handleChanges}><option >MM</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></span>

            <span>Year
            <select value={cardDetail.year} className="year" name="year" onChange={handleChanges}><option >YY</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option></select></span>

            <input value={cardDetail.cvv} type="password" className="cvv" maxLength={4} name="cvv"  placeholder="CVV" onChange={handleChagne}/>

        </div>
        <div>
            <button className="submitbtn" type="button" onClick={handlePlace}>PAY ₹ <span className="totpr3"></span></button>
            
            <p className="rbi">Add and secure your card as per RBI guidelines</p>
           
        </div>

    </div>
            
        </DIV >
    )
}

export default CheckOut;

const DIV = styled.div`



.checkout{
    display: flex;
    flex-direction:column;
    gap:30px;
    margin: auto;
    width:max-content;
    border: 1px solid grey;
    height: max-content;
    position: relative;
    padding:20px;
    margin-top:80px;
}
.checkout div{
    left: 10px;
}
.cartOption{
    color:orange
}
.cartOption input{
    color:red
}
.cardNumber input{
   width: 200px;
   outline: none;
}
.detail span{
    margin-left:15px;
}
.cvv{
    margin-left:20px
}
.submitbtn{
    margin-top: 20px;
    background: #fb641b;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    border: none;
    color: #fff;
    height: 48px;
    font-size: 16px;
    font-weight: 400;
    min-width: 200px;
    border-radius: 3px;
}





`