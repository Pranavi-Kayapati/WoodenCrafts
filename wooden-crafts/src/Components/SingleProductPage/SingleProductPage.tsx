import { Box } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import {RootState, store, useAppDispatch, useAppSelector } from '../Redux/store';
 import styles from '../App.css';
import Gallary from '../Components/Gallary/Gallary';
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import { useParams } from 'react-router';
import { any } from 'prop-types';

const SingleProductPage = () => {  
  const {id}=useParams()
  const [userData, setUserData] = useState(null)
 // const products = useSelector((store:any)=>store.productReducer.data);
 //let data=products.find((item:any)=> item.id==id)
 useEffect(() => {
  // Fetch user data based on 'userId'
  fetch(`https://all-products-wjqd.onrender.com/products?id=${id}`)
    .then((response) => response.json())
    .then((data) => setUserData(data))
    .catch((error) => console.error('Error fetching data:', error));
}, [id])
  //console.log(userData)
  const {image,
  title,
  Price,
  brand,
  color,
  material,
  category,
  description,

  } = userData
  return (
    <div className={styles['product-page-wrapper']}>
    <section className={styles['product-details']}>
      <Gallary images={image} />
      <ProductDetails
        id={"j938hgj"}
        title={title}
        price={Price}
        brand={brand}
        color={color}
        material={material}
        category={category}
        description={description.Monsoon Sale}

      />
    </section>
  </div>
  )
}

export default SingleProductPage;