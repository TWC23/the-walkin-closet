import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/navbar";
import PaytmTestPayment from "../Payment/paytm-config";

const checkout = (products) => {
  const [name, setName] = useState("");

  return (
    <>
      <Navbar />
      <checkout-body>
        <checkout-header>Checkout</checkout-header>
        <checkout-info>
          <checkout-form>
            <label>Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </checkout-form>
          <shipping-details>
            <shipping-header>Shipping Details</shipping-header>
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
            <PaytmTestPayment />
          </shipping-details>
        </checkout-info>
      </checkout-body>
    </>
  );
};

checkout.propTypes = {
  products: PropTypes.array,
};

export default checkout;
