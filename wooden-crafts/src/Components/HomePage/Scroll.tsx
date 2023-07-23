import { Box } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export interface DataItem {
  imageUrl: string;
}

interface ScrollProps {
  data: DataItem[];
}

export const Scroll: React.FC<ScrollProps> = ({ data }) => {
  console.log(data)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
      <div style={{marginTop:'30px'}}>
<Carousel  responsive={responsive}>
        {data.map((ele:any)=>(
            <>
            <img style={{height:'400px',width:'95%'}}  src={ele.imageUrl}></img>
            <p  style={{marginTop:'10px',fontSize:'20px'}}>Buy Now And Get <span style={{color:'red'}}>40% </span>Off</p>
            <p className="blink"style={{marginTop:'5px',fontSize:'20px',color:'red'}} >Hurray !! Sale Ends on Sunday</p>
            </>
            
        ))}
        </Carousel>
      </div>
    
     
  );
}
// 
// 