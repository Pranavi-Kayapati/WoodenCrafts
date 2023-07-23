import React from 'react'
import { Carousel } from "./Carousel";
import { Box, Container, Grid, GridItem } from '@chakra-ui/react'
import { SideSlider } from "./SideSlider";

export const GridSlider = () => {
  return (
    <Grid
    h="500px"
    templateRows="repeat(2, 1fr)"
    templateColumns="60% 40%"
    gap={2}
    marginTop={"140px"}
    marginBottom={"150px"}
    width={"98%"}
    
  >
    <GridItem rowSpan={2} colSpan={1} ><Carousel/></GridItem>
    <GridItem colSpan={1} rowSpan={1} ><Box><img  style={{height:"295px",width:"100%"}} src="https://www.woodenstreet.com/images/home-new1/Mobile-Banner.jpg?v=19" /></Box></GridItem>
    <GridItem colSpan={1}  rowSpan={1}><Box ><SideSlider/> </Box></GridItem>
  </Grid>
  )
}
