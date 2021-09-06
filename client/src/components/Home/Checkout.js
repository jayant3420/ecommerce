import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cartData);
  const { discountAmount } = useSelector((state) => state.getDiscountCoupon);

  const totalBillAmount = cart.reduce((acc, cur) => {
    acc = acc + cur.quantity * cur.new_price;
    return acc;
  }, 0);

  const checkOutBtnClose = () => {
    const checkout = document.getElementById("checkout");
    const rootContainer = document.getElementById("root-container");
    const mainContainer = document.getElementById("main-container");
    const menuMb = document.getElementById("menu-mb");
    checkout.style.display = "none";
    rootContainer.style.pointerEvents = "auto";
    mainContainer.style.pointerEvents = "auto";
    menuMb.style.pointerEvents = "auto";
  };

  return (
    <div className="checkout" id="checkout">
      <p id="close">
        <i
          class="fas fa-times"
          id="close-btn-payment"
          onClick={() => checkOutBtnClose()}
        ></i>
      </p>
      <p id="amount-detail">
        <span>Total Amount:</span>
        <span>&#36;{totalBillAmount + 20 - discountAmount}</span>
      </p>
      <p id="payment-msg">Success</p>
    </div>
  );
};

export default Checkout;
