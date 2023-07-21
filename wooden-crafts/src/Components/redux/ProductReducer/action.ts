import { Get_Error, Get_Request, Get_Success } from "../actionTypes"

export let RequestAction=()=>{
  return {type:Get_Request}
}

export let RequestSuccess=(payload:any)=>{
  return {type:Get_Success,payload}
}

export let RequestError=()=>{
  return {type:Get_Error}
}