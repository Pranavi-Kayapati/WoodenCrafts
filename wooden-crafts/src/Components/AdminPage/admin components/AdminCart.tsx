import React from "react";
import monsoon from "../../../images/monsoon.png";
import store from "../../../images/store discount.png";
import emi from "../../../images/no cost emi.png";
import season from "../../../images/season end sale.avif";
const AdminCart = () => {
  return (
    <div className="active admin-cart">
      <div>
        <h1 className="heading">Wooden Crafts Offers</h1>
        <div className="offers-container">
          <div className="monsoon-sale">
            <div>
              <h1 className="offers-heading">Monsoon Sale</h1>
              <p className="sub-head">
                Apply Coupon MONSOON & Get Upto 20% Off (price inclusive of
                discount) T&C
              </p>
              <p className="sale-desc">
                "Exciting MONSOON offer: Apply coupon code MONSOON and avail up
                to 20% discount on all items! Don't miss out, shop now and save
                big!"
              </p>
            </div>
            <div>
              <img src={monsoon} alt="" />
            </div>
          </div>

          <div className="stroe-discount">
            <div>
              <h1 className="offers-heading"> Store Discounts</h1>

              <p className="sub-head">
                Get upto 10% off on orders placed at your nearest experience
                stores T&C
              </p>
              <p className="sale-desc">
                "Indulge in a delightful shopping experience at our nearest
                stores, unlock incredible savings of up to 10%. Unveil a world
                of exciting products and make the most of this limited-time
                offer."
              </p>
            </div>
            <div>
              <img src={store} alt="" />
            </div>
          </div>
          <div className="no-cost-emi">
            <div>
              <h1 className="offers-heading">No Cost EMI</h1>

              <p className="sub-head">
                Starting from Rs 5,269 on ICICI, Axis, Kotak, HDFC, SBI & More
              </p>
              <p className="sale-desc">
                "Shop No Cost EMI options, starting as low as Rs 5,269,
                available with leading banks like ICICI, Axis, Kotak, HDFC, SBI,
                and more."
              </p>
            </div>

            <div>
              <img src={emi} alt="" />
            </div>
          </div>
          <div className="season-end">
            <div>
              <h1 className="offers-heading">Season End Offers</h1>
              <p className="sub-head">
                Apply Coupon SEASONEND & Get Upto 40% Off (price inclusive of
                discount) T&C
              </p>
              <p className="sale-desc">
                "Make the most of our Season End Offers! Use coupon code
                SEASONEND to avail yourself of up to 40% off (price inclusive of
                discount). Hurry, grab your favorite items before the offer
                ends. Terms and conditions apply."
              </p>
            </div>
            <div>
              <img src={season} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCart;
