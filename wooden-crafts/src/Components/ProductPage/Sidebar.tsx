import { useSearchParams } from "react-router-dom";
// import "./Sidebar.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Heading, Text } from "@chakra-ui/react";

const Sidebar = () => {
  const [search, setSearch] = useSearchParams([]);
  let initOrder = search.get("order");
  let [order, setOrder] = useState("" || initOrder);
  let initPrice = search.getAll("price");
  const [priceRange, setPriceRange] = useState<string[]>([]);
  let initMa = search.getAll("material");
  let [material, setMaterial] = useState<string[]>(initMa || []);
  let initColor = search.getAll("color");
  let [color, setColor] = useState<string[]>(initColor || []);
  let initBrand = search.getAll("brand");
  let [brand, setBrand] = useState<string[]>(initBrand || []);

  const HandleChange = (e: any) => {
    setOrder(e.target.value);
  };

  const handlePriceRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let newPriceRange = [...priceRange];
    if (newPriceRange.includes(value)) {
      newPriceRange = newPriceRange.filter((ele) => ele !== value);
    } else {
      newPriceRange.push(value);
    }
    setPriceRange(newPriceRange);
  };

  let HandelMa = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    let newMaterial = [...material];
    if (newMaterial.includes(value)) {
      newMaterial = newMaterial.filter((ele) => ele !== value);
    } else {
      newMaterial.push(value);
    }
    setMaterial(newMaterial);
  };

  let Handelcolor = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    let newColor = [...color];
    if (newColor.includes(value)) {
      newColor = newColor.filter((ele) => ele !== value);
    } else {
      newColor.push(value);
    }
    setColor(newColor);
  };

  const HandleBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    let newBrand = [...brand];
    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((ele) => ele !== value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };

  useEffect(() => {
    let params: any = {
      material,
      color,
      brand,
      price: priceRange,
    };

    order && (params.order = order);
    setSearch(params);
  }, [order, material, color, brand, priceRange]);

  return (
    <DIV>
      <Heading size='md' color={"#f9a92c"} p={2} >Filters</Heading>
      <hr />
      <br/>
      <Text fontSize='md' fontWeight={'semibold'}>MATERIAL</Text>
      <div>
        <div >
          <input
            type="checkbox"
            value={"Velvet"}
            checked={material.includes("Velvet")}
            onChange={HandelMa}
          />
          <label>Velvet</label>
        </div>
       
        <div>
          <input
            type="checkbox"
            value={"Cotton"}
            checked={material.includes("Cotton")}
            onChange={HandelMa}
          />
          <label>Cotton</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Leather"}
            checked={material.includes("Leather")}
            onChange={HandelMa}
          />
          <label>Leather</label>
        </div>
      </div>
      <br/>
      <hr/>
      <br />
      <Text fontSize='md' fontWeight={'semibold'}>COLOR</Text>
      
      <div  >
        <input
          type="checkbox"
          value={"Cream"}
          onChange={Handelcolor}
          checked={color.includes("Cream")}
        />
        <label >
          Cream
        </label>
      </div>
      <div >
        <input
          type="checkbox"
          value={"Grey"}
          onChange={Handelcolor}
          checked={color.includes("Grey")}
        />
        <label>
          Grey
        </label>
      </div>
      <div  >
        <input
          type="checkbox"
          value={"Blue"}
          onChange={Handelcolor}
          checked={color.includes("Blue")}
        />
        <label>
          Blue
        </label>
      </div>
      <br />
      <hr />
      <br />
      <Text fontSize='md' fontWeight={'semibold'} >BRAND</Text>
      <div>
        <input
          type="checkbox"
          value={"Wooden Street"}
          onChange={HandleBrand}
          checked={brand.includes("Wooden Street")}
        />
        <label>Wooden Street</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Urban Living"}
          onChange={HandleBrand}
          checked={brand.includes("Urban Living")}
        />
        <label>Urban Living</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Arra"}
          onChange={HandleBrand}
          checked={brand.includes("Arra")}
        />
        <label>Arra</label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="checkbox"
          value={"Spacewood"}
          onChange={HandleBrand}
          checked={brand.includes("Spacewood")}
        />
        <label>Spacewood</label>
      </div>
      <hr />
      <Heading size='md' p={2} color={"#f9a92c"}  >Sort by</Heading>
      <hr />

      <div onChange={HandleChange}>
        <label htmlFor="">
          <input
            type="radio"
            value={"asc"}
            name="order"
            defaultChecked={initOrder == "asc"}
          />
          Price (Low to High){" "}
        </label>
        <br/>
        <label style={{ marginRight: "-30px" }}>
          <input
            type="radio"
            value={"desc"}
            name="order"
            defaultChecked={initOrder == "desc"}
          />
          Price (High to Low)
        </label>
      </div>
      <br />
      <hr />
    </DIV>
  );
};

const DIV=styled.div`
   padding:0 20px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-right: 5px;
    /* border: 2px solid green; */
    hr{
   border:0.5px solid gray;
   width: 110%; 
   padding:0px
}

input{
   position: relative;
   top: 2.2px;
   width: 5vh;
   height: 2.8vh;
   
   
}
`


export default Sidebar;
