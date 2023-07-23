import "./ProductCard.css"
import { Box,Badge,Image, Button} from '@chakra-ui/react'
import {StarIcon} from "@chakra-ui/icons"
import { Link } from '@chakra-ui/react'
import { addToCart } from "../redux/cartReducer/action"
import { Dispatch } from "redux"
import { useDispatch,useSelector } from "react-redux"
import axios from "axios"
import { RequestAction,RequestError } from "../redux/ProductReducer/action"


export let ProductCard=({product}:any)=>{


  const dispatch:Dispatch<any> = useDispatch();

const FetchData=()=>{

    console.log(product)
    
    dispatch(RequestAction())
    axios.post("https://all-products-wjqd.onrender.com/cart",{product})
    .then((res)=>{
      alert("product is added successfully")
      console.log(res.data)
      dispatch(addToCart(product))
    })
    .catch((err)=>{
      console.log(err);
      dispatch(RequestError())
    })
  
   }
  
  
  
  
  const handleAddToCart = () => {

    FetchData()
   
  };

    return (
        <div>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'  w="95%">
         
        
          <Box p='6' >
          <Link href={`/product/${product.id}`}><Image src={product.image}  w="300px" h="200px"/></Link>
    
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              {product.title}
            </Box>
                <p style={{color:"gray"}}>Wooden Street</p>
            
            <div style={{position:"relative",top:"10px"}}>
            <Box display='flex' mt='2' alignItems='center' >
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={ '#F3601E'}
                  />
                ))}
              
            </Box>
            
            <Box mr="200px" mt="3">
              Rs {product.price}
              
            </Box>
            </div>
            <div style={{position:"relative",bottom:"30px"}}>
            <Box ml="150px" >
                <Button background="#F3601E" color="white" w="18vh" h="6vh" onClick={handleAddToCart}>Add To Cart</Button>
            </Box>
            </div>
          </Box>
         
        </Box>
        </div>
      )
}
