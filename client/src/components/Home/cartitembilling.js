import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CouponCode from "./CouponCode";

const Cartitembilling = () => {
  const cartData = useSelector((state) => state.cartData);
  const cart = cartData.cart;
  const getCouponDetails = useSelector((state) => state.getDiscountCoupon);
  const discountAmount = getCouponDetails.discountAmount;
  const discountGetRequest = getCouponDetails.discountGetRequest;
  const totalBillAmount = cart.reduce((acc, curr) => {
    acc = acc + curr.quantity * curr.new_price;
    return acc;
  }, 0);

  const checkOutBtnClick = () => {
    const checkout = document.getElementById("checkout");
    const rootContainer = document.getElementById("root-container");
    const mainContainer = document.getElementById("main-container");
    const menuMb = document.getElementById("menu-mb");
    checkout.style.display = "block";
    rootContainer.style.pointerEvents = "none";
    mainContainer.style.pointerEvents = "none";
    menuMb.style.pointerEvents = "none";
  };

  return (
    <>
      <div className="cart-billing-detail flex-row flex-space-btw">
        <CouponCode />
        <div className="bill-calculate">
          <p className="flex-row flex-space-btw">
            <span>Subtotal</span>
            <span>&#36;{totalBillAmount}</span>
          </p>
          <p className="flex-row flex-space-btw">
            <span>Shipping Fee</span>
            <span>&#36;{20}</span>
          </p>
          <p className="flex-row flex-space-btw">
            <span>Coupon</span>
            <span>{discountAmount !== 0 ? "Yes" : "No"}</span>
          </p>
          <hr />
          <p className="flex-row flex-space-btw total">
            <span>Total</span>
            <span>
              &#36;
              {totalBillAmount + 20 - discountAmount}
            </span>
          </p>
          <button id="checkout-btn" onClick={() => checkOutBtnClick()}>
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Cartitembilling;
