import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/navbar";
import PaytmTestPayment from "../Payment/paytm-config";
import "./checkout.css";

const checkout = (products) => {
  const [name, setName] = useState("");

  return (
    <>
      <Navbar />
      <checkout-body>
        <checkout-header>
          <h1>Checkout</h1>
        </checkout-header>
        <below-header>
          Please enter your details below to complete your purchase
        </below-header>
        <into-2>
          <checkout-info>
            <checkout-form>
              <label>Name</label>
            </checkout-form>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <shipping-details-2>
              <shipping-header>
                <h2>Shipping Details</h2>
              </shipping-header>
              <shipping-form>
                <label>Address</label>
                <input type="text" />
                <label>City</label>
                <input type="text" />
                <label>State</label>
                <input type="text" />
                <label>Zip Code</label>
                <input type="text" />
                <label>Country</label>
                <input type="text" />
              </shipping-form>
            </shipping-details-2>
          </checkout-info>
          <checkout-info>
            <h2>Review your order</h2>
            <hr style={{width: "100%"}}/>
            <hr style={{width: "100%"}}/>
            <PaytmTestPayment />
          </checkout-info>
        </into-2>
      </checkout-body>
    </>
  );
};

checkout.propTypes = {
  products: PropTypes.array,
};

export default checkout;
