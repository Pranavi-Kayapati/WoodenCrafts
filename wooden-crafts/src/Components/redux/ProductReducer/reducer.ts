import { Get_Error, Get_Request, Get_Success } from "../actionTypes"

interface val{
    isLoading:boolean,
    isError:boolean,
    product:any[]
}

let init:val={
isLoading:false,
isError:false,
product:[]
}

export let reducer=(state=init,action:any)=>{
   const {type,payload}=action
switch(type){
    case Get_Request:{
        return {...state,isLoading:false}
    }

    case Get_Success:{
        return {...state,isLoading:false,product:payload}
    }

    case Get_Error:{
        return {...state,isError:true}
    }

    default:{
        return state
    }
}


}

