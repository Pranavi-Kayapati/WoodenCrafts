import React from "react";
import "./ProductPage.css"
import {useDispatch,useSelector,shallowEqual} from "react-redux"
import {useEffect} from "react"
import axios from "axios"
import { RequestAction, RequestError, RequestSuccess } from "../redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";
import {useState} from "react"
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";



const ProductPage = () => {
 let dispatch=useDispatch()
 const [search,setSearch]=useSearchParams([])
 const location = useLocation();


 const {isLoading,product,isError}=useSelector((item:any)=>{

  return {
    isLoading:item.productReducer.isLoading,
    product:item.productReducer.product,
    isError:item.productReducer.isError
  }
 },shallowEqual)


 let paramsObj={
  params:{
   
    priceRange:search.getAll("priceRange"),
    brand:search.getAll("brand"),
    color:search.getAll("color"),
    material:search.getAll("material"),
    price:search.getAll("price"),
    _sort:search.get("order") && "price",
    _order:search.get("order")
  }
 }

 const FetchData=()=>{
  dispatch(RequestAction())
  axios.get("https://all-products-wjqd.onrender.com/products",paramsObj)
  .then((res)=>{
    dispatch(RequestSuccess(res.data))
  })
  .catch((err)=>{
    console.log(err);
    dispatch(RequestError())
  })

 }


useEffect(()=>{
  FetchData()

},[search])
console.log(product);


 if(isLoading){
  return <h1>Loading...</h1>
 }

return (
  <div className="product_container">
    
    {
      product.map((ele:any)=>(
          <ProductCard 
          key={ele.id}
          product={ele}
          />
      ))
    }
    
    </div>
)
};

export default ProductPage;

// const DIV=styled.div`
  
// `