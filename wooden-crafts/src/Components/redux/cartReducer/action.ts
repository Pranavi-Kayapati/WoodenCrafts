
import axios from "axios"
import { GET_CART_PRODUCT } from "../actionTypes"



export const getCartProducts=()=>async(dispatch:any)=>{
        let res=await axios.get(`https://all-products-wjqd.onrender.com/products`)
        dispatch({type:GET_CART_PRODUCT,payload:res.data})
}