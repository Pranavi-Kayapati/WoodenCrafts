import { Login_Error, Login_Request, Login_Success, Post_Success } from "../actionTypes";

interface val{
    isLoading:boolean,
    isError:boolean,
   isAuth:false
   data:[]
}

let init:val={
isLoading:false,
isError:false,
isAuth:false,
data:[]
}


export const reducer = (state=init,{type,payload}:any) => {
    switch(type){
            case Login_Request:{
                return {...state,isLoading:false}
            }
        case Login_Success:{
            return {...state,isLoading:false,isAuth:true,data:payload}
        }
        case Post_Success:{
            return {...state}
        }
        case Login_Error:{
            return {...state,isError:true}
        }
        default:{
            return state
        }
    }
  };
