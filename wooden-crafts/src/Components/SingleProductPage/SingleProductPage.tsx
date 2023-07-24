import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import React from "react";
import { useParams } from "react-router";
import { Product, ProductsState } from "../constrainsts/Type";
import { RootState } from "../redux/store";
import { RequestAction } from "../redux/ProductReducer/action";
import axios from "axios";
import "./SingleProductPage.css";
import { AiOutlineHeart } from "react-icons/ai";
import { MdAccessAlarm } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { BsArrowDownCircleFill } from "react-icons/bs";
interface props {
  isLoading: boolean;
  product: Product[];
  isError: boolean;
}

const SingleProductPage = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);

  const fetchProduct = () => {
    axios
      .get(`https://all-products-wjqd.onrender.com/products/${id}`)
      .then((res) => {
        setSingleProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!singleProduct) {
    return <div>Loading...</div>;
  }


  const FetchData = () => {
  
    axios
      .post("https://all-products-wjqd.onrender.com/cart", {singleProduct})
      .then((res) => {
        alert("product is added successfully");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddToCart = () => {
    console.log(singleProduct)
    FetchData();
  };

  return (
    <div className="single-product-container">
      <div className="single-product">
        <div className="product-img">
          <img src={singleProduct.image} alt="" />
        </div>
        <div className="single-product-details">
          <h4 className="product-title">{singleProduct.title}</h4>
          <p className="material-color">
            ({singleProduct.material},{singleProduct.color})
          </p>
          <div className="ratings-reviews">
            <p>
              <span className="rating-stars">
                {"\u2605 \u2605 \u2605 \u2605 \u2606"}
              </span>
              694 Ratings & 144 Reviews
            </p>
            <p className="wishlist-btn">
              <AiOutlineHeart color="#ff5702" size="25px" />
              <span>Add To Wishlist</span>
            </p>
          </div>
          <div className="price-div">
            <div>
              <h1>RS {singleProduct.price}</h1>
              <p>
                <del>RS 57,999</del>
              </p>
              <p className="discount">31% OFF</p>
            </div>
            <div>
              <p className="warning">
                <MdAccessAlarm color="#ff5702" size="20px" />
                <span> Sale Ends On 1d 9h 59m 5s</span>
              </p>
            </div>
          </div>
          <div className="special-offers">
            <h1>
              {" "}
              <BiSolidOffer color="#ff5702" size="25px" />
              <span>Special Offers</span>
            </h1>
            <div>
              <p>
                <h4>Monsoon Sale :</h4>
                <p>
                  Apply Coupon MONSOON & Get Upto 20% Off (price inclusive of
                  discount) T&C
                </p>
              </p>
              <p>
                <h4>Store Discoun :</h4>
                <p>
                  Get upto 10% off on orders placed at your nearest experience
                  stores T&C
                </p>
              </p>
              <p>
                <h4>No Cost EMI :</h4>
                <p>
                  Starting from Rs 5,269 on ICICI, Axis, Kotak, HDFC, SBI & More
                </p>
              </p>
            </div>
          </div>
          <div className="add-to-cart">
            <button onClick={handleAddToCart}>Add To Cart</button>
          </div>
          <div className="special-offers">
            <h1>
              {" "}
              <BsArrowDownCircleFill color="#ff5702" size="25px" />
              <span>Product Overview</span>
            </h1>
            <div>
              <p>
                <h4>Title :</h4>
                <p>{singleProduct.title}</p>
              </p>
              <p>
                <h4>Material :</h4>
                <p>{singleProduct.material}</p>
              </p>
              <p>
                <h4>Color :</h4>
                <p>{singleProduct.color}</p>
              </p>
              <p>
                <h4>Brand :</h4>
                <p>{singleProduct.brand}</p>
              </p>
              <p>
                <h4>Shape :</h4>
                <p>{"Rectangular"}</p>
              </p>
              <p>
                <h4>Features :</h4>
                <p>
                  {
                    "The Sinuous spring system, comfortable cashion and high desnsity foam."
                  }
                </p>
              </p>
              <p>
                <h4>Quantity :</h4>
                <p>{"1 Unit"}</p>
              </p>
              <p>
                <h4>Finish :</h4>
                <p>{"Walnut finish"}</p>
              </p>
              <p>
                <h4>Warranty :</h4>
                <p>{"36 Monts Warranty"}</p>
              </p>
              <p>
                <h4>Delivery :</h4>
                <p>{"Expert-Assembly"}</p>
              </p>
              <p>
                <h4>SKU :</h4>
                <p>{"WSFBS159IB20205"}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
