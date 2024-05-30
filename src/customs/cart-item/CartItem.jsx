import { useState } from "react";
import PropTypes from "prop-types";
import "./cart-item.css";

const CartItem = (product) => {
  const [productQuantity, setProductQuantity] = useState(
    product.product.quantity
  );

  const handleIncrement = () => {
    setProductQuantity(productQuantity + 1);
  };

  const handleDecrement = () => {
    setProductQuantity(productQuantity - 1);
  };

  return (
    <cart-item>
      <img src="../../src/assets/Hoodie.jpg" alt="" />
      <product-name-quantity>
        <product-name>{product.product.name}</product-name>
        Quantity
        <product-quantity>
          <button onClick={handleDecrement}>-</button>
          <span>{productQuantity}</span>
          <button onClick={handleIncrement}>+</button>
        </product-quantity>
      </product-name-quantity>

      <product-price>
        Price
        <span>${product.product.price}</span>
      </product-price>
    </cart-item>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartItem;
