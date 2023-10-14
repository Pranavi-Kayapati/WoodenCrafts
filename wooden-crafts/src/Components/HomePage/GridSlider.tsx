import React from 'react'
import { Carousel } from "./Carousel";
import { Box, Container, Grid, GridItem,Flex } from '@chakra-ui/react'
import { SideSlider } from "./SideSlider";
import { Image } from 'antd';

export const GridSlider = () => {
  return (
  //   <Grid
  //   h="500px"
  //   templateRows="repeat(2, 1fr)"
  //   templateColumns="60% 40%"
  //   gap={2}
  //   marginTop={"140px"}
  //   marginBottom={"150px"}
  //   width={"98%"}
    
  // >
  //   <GridItem rowSpan={2} colSpan={1} ><Carousel/></GridItem>
  //   <GridItem colSpan={1} rowSpan={1} ><Box><img  style={{height:"295px",width:"100%"}} src="https://www.woodenstreet.com/images/home-new1/Mobile-Banner.jpg?v=19" /></Box></GridItem>
  //   <GridItem colSpan={1}  rowSpan={1}><Box ><SideSlider/> </Box></GridItem>
  // </Grid>
  <Flex marginTop={'10%'} gap={'5px'} direction={{base:"column",sm:"column",md:"column",lg:"row",xl:"row","2xl":"row"}} >
    <Box width={{base:"100%",sm:"100%",md:"100%",lg:"60%",xl:"60%","2xl":"60%"}}
    ><Carousel/></Box>
    <Flex 
     direction={{base:"column",sm:"column",md:"column",lg:"column",xl:"column","2xl":"column"}} gap={'5px'} width={{base:"100%",sm:"100%",md:"100%",lg:"90%",xl:"40%","2xl":"40%"}}>
    <Box  ><Image width={'100%'} height={'295px'} src="https://www.woodenstreet.com/images/home-new1/Mobile-Banner.jpg?v=19" /></Box>
      <Box    ><SideSlider/></Box>
    </Flex>
   
  </Flex>
  )
}
