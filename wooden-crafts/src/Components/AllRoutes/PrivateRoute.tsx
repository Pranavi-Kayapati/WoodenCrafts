import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}:any) => {
let isAuth=useSelector((item:any)=>item.authReducer.isAuth)

if(!isAuth){
  <Navigate to="/login"/>
}

  return <div>
    {children}

  </div>;

};

export default PrivateRoute;
