import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoupon } from "../actions/home/cart";

const CouponCode = () => {
  const [voucherCode, setVoucherCode] = useState("");
  const [couponDetails, setCouponDetails] = useState({
    couponClass: "",
    couponMsg: "",
    closeBtnShow: false
  });
  const dispatch = useDispatch();
  const getDiscountCoupon = useSelector((state) => state.getDiscountCoupon);
  const coupon = getDiscountCoupon.coupon;
  const discountAmount = getDiscountCoupon.discountAmount;
  const discountGetRequest = getDiscountCoupon.discountGetRequest;
  const cartData = useSelector((state) => state.cartData);
  const cart = cartData.cart;

  const totalAmount = cart.reduce((acc, cur) => {
    acc = acc + cur.new_price * cur.quantity;
    return acc;
  }, 0);

  const getCouponDetails = async () => {
    if (!voucherCode) {
      alert("Please Enter Coupon Code");
    } else {
      await dispatch(getCoupon(voucherCode));
    }
  };

  const couponClose = () => {
    dispatch({ type: "COUPON", payload: [] });
    dispatch({ type: "COUPONAMOUNT", payload: 0 });
    dispatch({ type: "DISCOUNTGETREQUEST", payload: "no" });
    setVoucherCode("");
  };

  useEffect(() => {
    if (!voucherCode) {
      couponClose();
    }
  }, [voucherCode]);

  let couponAmount = 0;
  if (coupon.length) {
    const couponTypeValue = coupon[0].discount;
    const couponType = couponTypeValue.charAt(couponTypeValue.length - 1);
    const value = Number(couponTypeValue.slice(0, couponTypeValue.length - 1));
    if (couponType === "%") {
      couponAmount = (totalAmount * value) / 100;
    } else if (couponType === "$") {
      couponAmount = value;
    }
  }

  useEffect(() => {
    dispatch({ type: "COUPONAMOUNT", payload: couponAmount });
  }, [coupon, cart]);

  useEffect(() => {
    if (discountGetRequest === "yes" && coupon.length === 0) {
      setCouponDetails({
        couponClass: "coupon-failed",
        couponMsg: "coupon code failed  ",
        closeBtnShow: true
      });
    }
    if (discountGetRequest === "yes" && coupon.length !== 0) {
      setCouponDetails({
        couponClass: "coupon-success",
        couponMsg: `coupon code applied. you saved total $${discountAmount}  `,
        closeBtnShow: true
      });
    }
    if (discountGetRequest === "no") {
      setCouponDetails({
        couponClass: "",
        couponMsg: "",
        closeBtnShow: false
      });
    }
  }, [discountGetRequest, discountAmount]);
  return (
    <div className="redeem-voucher-container">
      <div className="redeem-voucher-subitems">
        <input
          type="text"
          placeholder="Voucher Code"
          name="voucher"
          maxLength={10}
          value={voucherCode}
          onChange={(event) => setVoucherCode(event.target.value)}
        />
        <button onClick={() => getCouponDetails()}>Redeem</button>
      </div>
      <p className={`coupon ${couponDetails.couponClass}`}>
        {couponDetails.couponMsg}
        {couponDetails.closeBtnShow && (
          <i className="far fa-times-circle" onClick={() => couponClose()}></i>
        )}
      </p>
    </div>
  );
};

export default CouponCode;
