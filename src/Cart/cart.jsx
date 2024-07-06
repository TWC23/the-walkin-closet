import React from "react";
import { useState } from "react";

import Navbar from "../Navbar/navbar";
import "./cart.css";
import CartItem from "../customs/cart-item/CartItem";

const Cart = () => {

  




  return (
    <>
      <Navbar />
      <cart-con-margin>
        <cart-con>
          <h1 className="cart-hd">Shopping Cart</h1>
          {/* <cart-items>
            <CartItem product={{ name: "Hoodie", quantity: 1, price: 100 }} />
          </cart-items> */}
        </cart-con>
      </cart-con-margin>
    </>
  );
};

export default Cart;
