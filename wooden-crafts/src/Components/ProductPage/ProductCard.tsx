import "./ProductCard.css"
import { Box,Badge,Image, Button} from '@chakra-ui/react'
import {StarIcon} from "@chakra-ui/icons"
import { Link } from '@chakra-ui/react'


export let ProductCard=({image,title,price,id}:any)=>{

    return (
        <div>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'  w="95%">
         
        
          <Box p='6' >
          <Link href={`/product/${id}`}><Image src={image}  w="300px" h="200px"/></Link>
    
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              {title}
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
              Rs {price}
              
            </Box>
            </div>
            <div style={{position:"relative",bottom:"30px"}}>
            <Box ml="150px" >
                <Button background="#F3601E" color="white" w="18vh" h="6vh">Add To Cart</Button>
            </Box>
            </div>
          </Box>
         
        </Box>
        </div>
      )
}
