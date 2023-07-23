import React, { useState } from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

import './HomePage.css'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const  SideSlider=()=> {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState([]);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://shop.gkwretail.com/cdn/shop/products/SofaCumbedFabric3SeaterSofaCumforLivingRoom_Cream-Brown_8915023d-5c9a-4843-979d-e64750f8f12d.jpg?v=1628754045&width=713',
    'https://royalamb.com/storage/images/products/reversible-wooden-swing-jhula-cane-onjle-with-brass-chain-ovi/24-Apr-2022/reversible-wooden-swing-jhula-cane-onjle-with-brass-chain-ovi.jpg',
    'https://www.thewoolcompany.co.uk/cdn/shop/products/giant-sheepskin-bean-bag-graphite-sheepskin-the-wool-company-411581.jpg?v=1570783460',
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings} ref={(slider:any) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height="270px"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}