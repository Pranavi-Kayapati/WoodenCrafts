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

    default:{
        return state
    }
}


}

