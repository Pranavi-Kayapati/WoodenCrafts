import { Login_Error, Login_Request, Login_Success, Post_Success } from "../actionTypes"

export let LoginRequest=()=>{
  return {type:Login_Request}
}

export let LoginSuccess=(payload:any)=>{
  return {type:Login_Success,payload}
}

export let LoginError=()=>{
  return {type:Login_Error}
}

export let PostSuccess=()=>{
  return {type:Post_Success}
}