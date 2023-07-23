import React, { useState } from "react";
import { VStack,Button,Input } from "@chakra-ui/react";
import styles from "./Login.module.css"
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { LoginSuccess } from "../redux/authReducer/action";

const LoginPage = () => {
  let [email,setEmail]=useState<string>("")
  let [password,setPassword]=useState<string>("")
  let dispatch=useDispatch()
  let navigate=useNavigate()
let FetchData=(email:any,password:any)=>{
axios.get("https://all-products-wjqd.onrender.com/users")
.then((res)=>{
console.log(res.data);
let match=res.data.find((ele:any)=>{
  return ele.email==email && ele.password==password
})

if(match){
  dispatch(LoginSuccess(match))
  navigate("/")
}

console.log("njnj",match);


})
.catch((err)=>{

})
if(email=="admin01@gmail.com" && password=="admin"){
  navigate("/admin")
}

setEmail("")
setPassword("")
  }

  
  // if(isAuth){
  //   return <Navigate to="/product"/>
  // }

  return (
    <div>
      <div style={{ backgroundImage: "url('https://i.pinimg.com/originals/49/16/ba/4916baf0575b121dac9bb85e23f80c21.jpg')" ,width:"100%",height:"630px",opacity:"4"}}>
        {/* Your content here */}
        <div className={styles.logo}>

          {/* <img src="https://static.adobelogin.com/clients/behance-2020/4x_b431ffdf8fed1c95074548ecb9d4920e.png"/> 
          <h1 style={{color:"white"}}>Behance</h1> */}
        </div>
        <div className={styles.input}>
          <div style={{position:"relative",top:"40px",left:"-140px"}}>
              
              <h1 style={{marginLeft:"7px",marginTop:"15px"}}>Sign in</h1>
              </div>
              <div style={{marginTop:"30px",marginLeft:"-280px",}}>
             
              <p>New user? <Link to="/signup"><span style={{color:"#1473e6"}}>Create an account</span></Link></p>
          </div>
          
          <div style={{position:"relative",left:"-12px"}}>
              <form action="">
             
              <Input required type="email" name="email" variant='flushed' w='370px' mt="15px" ml="5px" placeholder="email address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <Input type="password" name="password" variant='flushed' w='370px' mt="15px" ml="5px" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <br />
              <Button variant="primary"  bg="#277BE9" color="white" borderRadius="1.5em" width="7.5vw" height="2.7vw" mt="25px" ml="280px" onClick={()=>FetchData(email,password)}>Continue</Button>
              </form>
          </div>
          <div className={styles.hr}>
             <hr />
             <span>or</span>
             <div>
             <hr className={styles.hr2}/>
             </div>
          </div>
              <VStack spacing="1"  ml="-120px" mt="20px">      
                  <button style={{marginTop:"6px",width:"21vw", height:"3vw",backgroundColor:"white",borderRadius:"1em",border:'1px solid rgb(177, 170, 170)'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZBdB0NcrWNlzdXQCMSs9qEdNi-lRty88veNsiRBV&s" alt="" width="16px" style={{marginLeft:"43px",marginTop:"10px"}}/><p style={{color:"black",position:"relative",bottom:"21px",left:"10px"}}>Continue with Google</p></button>
                  <button style={{marginTop:"6px",width:"21vw", height:"3vw",backgroundColor:"white",borderRadius:"1em",border:'1px solid rgb(177, 170, 170)'}}><img src="https://th.bing.com/th?id=OIP.9g4dkKVAUyciOuDI9_vEYQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" width="30px" style={{marginLeft:"39px",marginTop:"2px"}}/><p style={{color:"black",position:"relative",bottom:"27px",left:"6px"}}>Continue with Apple</p></button>
                  <button style={{marginTop:"6px",width:"21vw", height:"3vw",backgroundColor:"white",borderRadius:"1em",border:'1px solid rgb(177, 170, 170)'}}><img src="https://th.bing.com/th?id=OIP.hGaetDAQWapgIJbIOhPhXwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" width="16px" style={{marginLeft:"45px",marginTop:"10px"}}/><p style={{color:"black",position:"relative",bottom:"21px",left:"18px"}}>Continue with Facebook</p></button>
                 
     </VStack> 
    
         
        
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
