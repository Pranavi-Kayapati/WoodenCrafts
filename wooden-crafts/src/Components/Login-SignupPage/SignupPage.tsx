import styles from "./Sign.module.css"
import { HStack,Input,Button } from "@chakra-ui/react";
import axios from "axios";

import {useState} from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LoginError, LoginRequest, LoginSuccess, PostSuccess } from "../redux/authReducer/action";

const SignUp=()=>{
  let [username,setUsername]=useState<string>("")
  let [email,setEmail]=useState<string>("")
  let [password,setPassword]=useState<string>("")
  let dispatch=useDispatch()


let [err,setErr]=useState(false);

let PostData=()=>{
  let obj={
    username,
    email,
    password
  }
  
if(username || email || password){
dispatch(LoginRequest())
axios.post("https://all-products-wjqd.onrender.com/users",obj)
.then((res)=>{
dispatch(PostSuccess())
setErr(false)
})
.catch((err)=>{
dispatch(LoginError())

})
setUsername("")
setEmail("")
setPassword("")
}
else {
  setErr(true)
}
}


    return (
        <div style={{marginTop:'130px'}}>
          <div style={{ backgroundImage: "url('https://i.pinimg.com/originals/49/16/ba/4916baf0575b121dac9bb85e23f80c21.jpg')" ,width:"100%",height:"630px"}}>
            {/* Your content here */}
           
            <div className={styles.logo}>
  
              {/* <img src="https://static.adobelogin.com/clients/behance-2020/4x_b431ffdf8fed1c95074548ecb9d4920e.png"/> 
              <h1 style={{color:"white"}}>Behance</h1> */}
            </div>
            <div className={styles.input}>
           
              <div style={{position:"relative",left:"-37px"}}>
                  <p style={{position:"relative",left:"100px"}}>Step 1 of 2</p>
                  <h1 style={{marginLeft:'95px'}}>Create an account</h1>
                  </div>
                  <HStack spacing="1"  ml="10px" mt="20px">      
                      <button style={{marginTop:"6px"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZBdB0NcrWNlzdXQCMSs9qEdNi-lRty88veNsiRBV&s" alt="" width="40px"/></button>
                      <button><img src="https://th.bing.com/th?id=OIP.9g4dkKVAUyciOuDI9_vEYQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" width="70px"/></button>
                      <button><img src="https://th.bing.com/th?id=OIP.hGaetDAQWapgIJbIOhPhXwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" width="40px"/></button>            
         </HStack> 
         <div className={styles.hr}>
                 <hr />
                 <span>or</span>
                 <div>
                 <hr className={styles.hr2}/>
                 </div>
              </div>
              <div style={{marginTop:"30px",marginRight:"250px"}}>
                  <p style={{color:"black",marginRight:"100px"}}>Sign up with email</p>
                  <p>Already have an account? <Link to="/login"><span style={{color:"#1473e6"}}>Sign in</span></Link></p>
              </div>
              {err&& <p style={{color:"red",marginLeft:"57px",marginTop:"30px"}}>Please fill in all fields</p>}
              <div style={{position:"relative",left:"46px"}}>
                  <form action="" >
                  <Input variant='flushed' w='370px' mt="15px" ml="5px" placeholder="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                  <Input required type="email" variant='flushed' w='370px' mt="15px" ml="5px" placeholder="email address" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  <Input type="password" variant='flushed' w='370px' mt="15px" ml="5px" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <br />
                  <Button variant="primary"  bg="#277BE9" color="white" borderRadius="1.5em" width="7.5vw" height="2.7vw" mt="25px" ml="280px" onClick={PostData}>Continue</Button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      );
}
export default SignUp