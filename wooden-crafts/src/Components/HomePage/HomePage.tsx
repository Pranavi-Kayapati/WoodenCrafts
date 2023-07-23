import './HomePage.css';
import { Heading, Text,Box ,SimpleGrid, VStack, Container, Flex} from "@chakra-ui/react";
import { GridSlider } from "./GridSlider";
import {Scroll} from "./Scroll";
import { DataItem } from './Scroll';
import homepage from '../Navbar/logo/homepage.png'
import customerdata from '../Navbar/logo/customerdata.png'

const HomePage = () => {
  const bestSeller: DataItem[] = [
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage%2Fwalken-bed-with-storage%2Fupdated%2Fupdated%2Fhoney%2F1-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fdining-set%2F6-seater%2Fmcbeth-storage-6-seater-dining-table-set%2Fupdated%2Fhoney%2Fupdated%2Flooks%2Fupdated%2F1-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Ffeltro-sofa-cum-bed%2Fupdated%2Fhoney%2Fupdated%2F3-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fcoffee-table%2Flynet-coffee-table-revised%2Fhoney%2Fupdated%2F1-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Ffabric-sofa%2Fhenry-fabric-sofa%2Findigo-blue-velvet%2Frevised%2Fupdated%2Fupdated%2F1-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Ftv-units-mdf%2Fhailey-wall-mounted-tv-unit%2Fexotic%2Fupdated+new%2Fupdated%2Fupda%2F1-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fwooden-sofa%2Fmarriott-wooden-sofa%2Frevised%2Frevised-looks%2Fhoney%2Fupdated-new%2F7-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fdressing-tables-mdf%2Florraine-dressing-table%2Frevised%2Fexotic-teak%2Fupdated%2F1-810x702.jpg',
    },
    // Add other items with their image URLs...
  ];
  const SofaCumBed: DataItem[] = [
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Ffeltro-sofa-cum-bed%2FPrinted+Dual+Fabric%2Fteal-aqua-marine%2Fhoney-finish%2F3-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Fdella-wooden-sofa-cum-bed-with-armrests%2Frevised%2Fhoney%2Fupdated%2F4-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Falfonso-fabric-sofa-cum-bed%2Fright-align%2Findigo-ink%2F2-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fsofa-beds-mdf%2Fectar-sofa-cum-bed-with-box-storage%2Fexotic-teak%2Fupdated-new%2F3-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fsofa-beds-mdf%2Fbartha-sofa-cum-bed-with-box-storage%2Fexotic-teak%2Fupdated%2Fupdated%2F3-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Fthar-sofa-cum-bed-revised%2Fhoney%2Fupdated%2F2-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Ffeltro-sofa-cum-bed%2FPrinted+Dual+Fabric%2FBerry-Diamonds%2Fwalnut-finish%2F3-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Fhover-sofa-cum-bed-revised%2Fchestnut-brown%2Fupdated%2F2-810x702.jpg',
    },
    // Add other items with their image URLs...
  ];
  const NewLaunches: DataItem[] = [
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Ffabric-sofa%2Fosbert-3-seater-curved-sofa%2Fjade-ivory%2F1-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fhome-temple%2Falanis-home-temple%2Fhoney%2Fupdated%2F1-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Ftv-units%2Fboho-tv-unit%2Fupdated%2Fhoney%2Fupdated%2F1-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Ffabric-sofa%2FFabric-Sofa-Combination%2F0_updated-look%2Fplam1-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fbar-cabinets%2Fwinslow-bar-cabinet%2Fhoney-finish%2F1-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fchina-furniture%2Fcarolina-lounge-chair-brown%2Fbrown%2FCream%2F1-810x702.jpg',
    },
    {
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fhome-decors%2Fjainsons+Lights%2Fgold-finish-iron-glass-chandeliers%2F1-810x702.jpg',
    },
    // Add other items with their image URLs...
  ];
  const BuyingGuidance: DataItem[] = [
    {
      imageUrl: 'https://www.woodenstreet.com/images/perfect-sofa-new/mobile-banner.jpg',
    },
    {
      imageUrl: 'https://www.woodenstreet.com/images/furniture-new/beds-buying-guide.jpg',
    },
    {
      imageUrl: 'https://www.woodenstreet.com/images/mattress-guide/mobile-banner.jpg',
    },
    {
      imageUrl: 'https://www.woodenstreet.com/images/furniture-new/beds-buying-guide.jpg',
    },
    {
      imageUrl: 'https://www.woodenstreet.com/images/mattress-guide/mobile-banner.jpg',
    }
    // Add other items with their image URLs...
  ];

  return (
    <>
    <Container  maxW='container.2xl'>
    <GridSlider/>
      <Heading  textAlign={"center"} marginBottom={"20px"}>Top Picks For You</Heading>
      <Text  textAlign={"center"} fontSize='2xl'>Impressive Collection For Your Dream Home</Text>
<SimpleGrid border={'2px solid green'} maxWidth={"80%"} margin={"auto"} marginTop={"30px"} columns={[2, null, 6]} spacing='40px'>
  <VStack>
  <Box  marginBottom={"50px"} height='100px'><img src="https://www.woodenstreet.com/images/home-new1/icon1.jpg" alt='broken'  ></img></Box>
  <Text fontSize='sm' marginTop={"20px"} >Sofa Sets</Text>
  </VStack>
  <VStack>
  <Box  marginBottom={"50px"} height='100px'><img src="https://www.woodenstreet.com/images/home-new1/icon2.jpg" alt='broken'  ></img></Box>
  <Text fontSize='sm' marginTop={"20px"} >Beds</Text>
  </VStack>
  <VStack>
  <Box  marginBottom={"50px"} height='100px'><img src="https://www.woodenstreet.com/images/home-new1/icon8.jpg" alt='broken'  ></img></Box>
  <Text fontSize='sm' marginTop={"20px"} >Coffee Table</Text>
  </VStack>
  <VStack>
  <Box  marginBottom={"50px"} height='100px'><img src="https://www.woodenstreet.com/images/home-new1/icon3.jpg" alt='broken'  ></img></Box>
  <Text fontSize='sm' marginTop={"20px"} >Dining Table</Text>
  </VStack>
  <VStack>
  <Box  marginBottom={"50px"} height='100px'><img src="https://www.woodenstreet.com/images/home-new1/icon10.jpg" alt='broken'  ></img></Box>
  <Text fontSize='sm' marginTop={"20px"} >TV Unit</Text>
  </VStack>
  <VStack>
  <Box  marginBottom={"50px"} height='100px'><img src="https://www.woodenstreet.com/images/home-new1/icon14.jpg" alt='broken'  ></img></Box>
  <Text fontSize='sm' marginTop={"20px"} >Dressing Table</Text>
  </VStack>
  <VStack>
  <Box marginBottom={"50px"}  height='100px'><img src="https://www.woodenstreet.com/images/home-new1/icon6.jpg" alt='broken'  ></img></Box>
  <Text fontSize='sm' marginTop={"20px"} >Table</Text>
  </VStack>
  <VStack>
  <Box marginBottom={"50px"}  height='100px'><img src="https://www.woodenstreet.com/images/home-new1/icon4.jpg"  alt='broken' ></img></Box>
  <Text fontSize='sm' marginTop={"20px"} >Sofa Cum Bed</Text>
  </VStack>
  <VStack>
  <Box marginBottom={"50px"}  height='100px'><img src="https://www.woodenstreet.com/images/home-new1/icon13.jpg" alt='broken'  ></img></Box>
  <Text fontSize='sm' marginTop={"20px"} >Shoe Rack</Text>
  </VStack>
  <VStack>
  <Box marginBottom={"50px"}  height='100px'><img src="https://www.woodenstreet.com/images/home-new1/icon11.jpg" ></img></Box>
  <Text fontSize='sm' marginTop={"20px"} >Home Decor</Text>
  </VStack>
  <VStack>
  <Box marginBottom={"50px"}  height='100px'><img src="https://www.woodenstreet.com/images/furnishing/icon1.jpg" alt='broken'  ></img></Box>
  <Text fontSize='sm' marginTop={"20px"} >Home Furnish</Text>
  </VStack>
  <VStack>
  <Box marginBottom={"50px"}  height='100px'><img src="https://www.woodenstreet.com/images/home-new1/icon12.jpg" alt='broken'  ></img></Box>
  <Text fontSize='sm' marginTop={"20px"} >Lamp & Lighing</Text>
  </VStack>
</SimpleGrid>
<hr style={{ marginTop:"50px"}}/>
<Heading  textAlign={"center"} marginTop={"50px"} marginBottom={"20px"}>India's Finest Online Furniture Brand</Heading>
<Container maxW='container.xl'>
<Text  textAlign={"center"} fontSize='lg'>Buy Furniture Online from our extensive collection of wooden furniture units to give your home an elegant touch at affordable prices.
 We offer a wide range of wooden furniture online to suit your home interiors. You can either buy furniture carved out of solid wood material from our
  offerings or get it customized to match your requirements. Buy furniture online and find the features, functionality, dimensions of the products, all with great ease. You can also avail the exciting deals and discount offers on our online furniture store. </Text>
</Container>

<SimpleGrid border={'2px solid yellow'} columns={[2, null, 3]} maxW={"90%"} margin={"auto"} marginTop={"40px"} spacing='40px'>
  <Box  ><img className="zoom"  alt='broken'  height='500px' src={"https://www.woodenstreet.com/images/home-new1/beds-banner.jpg?v=19"}></img></Box>
  <Box ><img className="zoom"  alt='broken'  height='500px' src={"https://www.woodenstreet.com/images/home-new1/wfh-banner.jpg?v=2"}></img></Box>
  <Box ><img className="zoom"  alt='broken'  height='500px' src={"https://www.woodenstreet.com/images/home-new1/space-save-banner.jpg?v=19"}></img></Box>
  <Box ><img className="zoom"  alt='broken'  src={"https://www.woodenstreet.com/images/home-new1/dining-set-banner.jpg?v=19"}></img></Box>
  <Box ><img className="zoom"  alt='broken'  src={"https://www.woodenstreet.com/images/home-new1/wooden-sofa-banner.jpg?v=19"}></img></Box>
  <Box> <img  className="zoom" alt='broken'  src={"https://www.woodenstreet.com/images/home-new1/dressing-table-banner.jpg?v=19"}></img></Box>
</SimpleGrid>
<hr style={{ marginTop:"80px"}}/>

<Heading  marginTop={"50px"} marginBottom={"20px"}>Best-Sellers Of The 2eason</Heading>
<Scroll data={bestSeller} /> 
<hr style={{ marginTop:"80px"}}/>
<Heading  marginTop={"60px"} marginBottom={"20px"}>Living Room Furniture</Heading>
<Flex gap={'20px'} >
    <Box   width={'50%'}><img  alt='broken' style={{height:'640px'}} src="https://www.woodenstreet.com/images/furniture-new/living-furniture1.jpg"></img></Box>
    <Box  width={'50%'}>
 <SimpleGrid h={'200px'} columns={[2, null, 2]} spacing='20px'>
  <div style={{height:'310px'}} className="image-box"><img alt='broken' style={{height:'100%'}} src="https://images.woodenstreet.de/image/cache/data%2Ffabric-sofa%2Fadrick-3-seater-sofa%2Fproduct%2FDark-olive-green%2F2-750x650.jpg"></img></div>
  <div style={{height:'310px'}} className="image-box"><img alt='broken' style={{height:'100%'}} src="https://images.woodenstreet.de/image/cache/data%2Ftv-units-mdf%2Fhailey-wall-mounted-tv-unit%2Fexotic%2Fupdated+new%2Fupdated%2Fupda%2F1-750x650.jpg"></img></div>
  <div style={{height:'310px'}} className="image-box"><img alt='broken' style={{height:'100%'}} src="https://www.woodenstreet.com/images/home-new1/side-end-look.jpg"></img></div>
  <div style={{height:'310px'}} className="image-box"><img alt='broken' style={{height:'100%'}} src="https://www.woodenstreet.com/images/home-new1/coffee-table-look.jpg"></img></div>
</SimpleGrid>
    </Box>
  </Flex>
  <hr style={{ marginTop:"80px"}}/>
  <Heading  marginTop={"50px"} marginBottom={"20px"}>Sofa Cum Beds</Heading>
   <Scroll data={SofaCumBed}/> 
   <hr style={{ marginTop:"80px"}}/>
   <Heading  marginTop={"50px"} marginBottom={"20px"}>New Launches</Heading>
   <Scroll data={NewLaunches}/> 
   <hr style={{ marginTop:"80px"}}/>
   <img style={{marginTop:'50px'}} src={homepage}></img>
   <Heading  marginTop={"60px"} marginBottom={"20px"}>Dining Room Furniture</Heading>
<Flex gap={'20px'} >
    <Box   width={'50%'}><img  alt='broken' style={{height:'640px'}} src="https://www.woodenstreet.com/images/furniture-new/dining-furniture1.jpg"></img></Box>
    <Box  width={'50%'}>
 <SimpleGrid h={'200px'} columns={[2, null, 2]} spacing='20px'>
  <div style={{height:'310px'}} className="image-box"><img alt='broken' style={{height:'100%'}} src="https://images.woodenstreet.de/image/cache/data%2Fdining-chairs%2Fadolph-dining-chairs-set-of-2-honey-finish%2Fhoney-finish%2F1-750x650.jpg"></img></div>
  <div style={{height:'310px'}} className="image-box"><img alt='broken' style={{height:'100%'}} src="https://images.woodenstreet.de/image/cache/data%2Fbar-cabinets%2Fauric-large-bar-cabinet-revised%2Fhoney%2Fupdated%2F1-810x702.jpg"></img></div>
  <div style={{height:'310px'}} className="image-box"><img alt='broken' style={{height:'100%'}} src="https://images.woodenstreet.de/image/cache/data%2Fkitchen-cabinet%2Fmonarch-kitchen-cabinet-revised%2Frevised%2Fhoney-finish%2Fupdated%2Fupdated%2F1-750x650.jpg"></img></div>
  <div style={{height:'310px'}} className="image-box"><img alt='broken' style={{height:'100%'}} src="https://images.woodenstreet.de/image/cache/data%2Fdining-set%2F2-seater%2Fbenz-wall-mount-2-seater-dining-set%2Frevised%2Fhoney%2Fupdated%2F1-750x650.jpg"></img></div>
</SimpleGrid>
    </Box>
  </Flex>
  <hr style={{ marginTop:"80px"}}/>
   <Heading  marginTop={"50px"} marginBottom={"20px"}>Need Buying Guidance?</Heading>
   <Scroll data={BuyingGuidance}/> 
   <hr style={{ marginTop:"80px"}}/>
   <img style={{marginTop:'20px'}} src={customerdata}></img>
   <hr style={{ marginTop:"20px"}}/>
</Container>

    </>
  );
};

export default HomePage;
