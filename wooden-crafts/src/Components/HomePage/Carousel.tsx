import React, { useState } from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const  Carousel=()=> {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  type SliderRefType = Slider | null;
  // const [slider, setSlider] = useState([]);
  const [slider, setSlider] = useState<SliderRefType>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://images.woodenstreet.de/image/cache/data%2Fdining-set%2F6-seater%2Falanis-6-seater-dining-set-with-bench%2Fupdated%2Fhoney%2Fupdated%2F1-810x702.jpg',
    'https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage-mdf%2Fsantana-teak-wood-bed-with-storage-king-size-gothic-grey-finish%2Fupdated%2Fupdated%2Fupdated%2F1-750x650.jpg',
    'https://images.woodenstreet.de/image/data/fabric-sofa/Fabric-Sofa-Combination/lorenz-3-seater-living-room-sofa-with-2-arm-chairs-and-6-cushions/products/ne-one-1.jpg',
   ' https://images.woodenstreet.de/image/data/x-n-y-furniture/ochre-olive-green-wooden-kids-bookshelf/1.jpg',
   'https://images.woodenstreet.de/image/data/office-table/nexora-l-shape-modular-office-table-with-three-drawers-flowery-wenge-frosty-white/exotic-teak-finish/1.jpg'
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
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
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        borderRadius="full"
        
        position="absolute"
        right={side}
        top={top}
    
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider:any) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'xl'}
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