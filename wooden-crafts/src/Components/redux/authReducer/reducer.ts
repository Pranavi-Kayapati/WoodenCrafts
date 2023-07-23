interface val{
    isLoading:boolean,
    isError:boolean,
   isAuth:false
}

let init:val={
isLoading:false,
isError:false,
isAuth:false
}


export const reducer = (state=init,{type,payload}:any) => {
    switch(type){

        

        default:{
            return state
        }
    }
  };
