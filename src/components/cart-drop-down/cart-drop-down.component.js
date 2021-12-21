import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-drop-down.styles.scss";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropDown;