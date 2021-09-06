import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./headerstyle.css";
import { cartDataFetch } from "../actions/home/cart";
import { productsDetailsFetch } from "../actions/products";

const Header = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);
  const cart = cartData.cart;
  const getCouponDetails = useSelector((state) => state.getDiscountCoupon);
  const discountAmount = getCouponDetails.discountAmount;
  const cartLength = cart.reduce((acc, cur) => {
    acc = acc + cur.quantity;
    return acc;
  }, 0);

  const totalCartItemAmount = cart.reduce((acc, cur) => {
    acc = acc + cur.quantity * cur.new_price;
    return acc;
  }, 0);

  useEffect(() => {
    dispatch(cartDataFetch());
    dispatch(productsDetailsFetch());
  }, []);

  const menubar = () => {
    const navBar = document.getElementById("navigation-bar");
    const navMobile = document.getElementById("nav-mobile-view");
    const navTop = document.getElementById("login-bar-mobile-view");
    const mainContainer = document.getElementById("main-container");
    navMobile.style.display = "block";
    navBar.classList.add("navigation-bar-mb");
    navBar.classList.remove("navigation-bar");
    navTop.style.filter = "blur(250px)";
    mainContainer.style.filter = "blur(250px)";
    navTop.style.pointerEvents = "none";
    mainContainer.style.pointerEvents = "none";
  };

  useEffect(() => {
    const menuMb = document.getElementById("menu-mb");
    menuMb.addEventListener("click", menubar);
    return () => {
      menuMb.removeEventListener("click", menubar);
    };
  }, []);

  return (
    <>
      <div className="login-bar">
        <div className="left-items">
          <select name="encoded" id="encodedId" className="encoded">
            <option value="en">EN</option>
            <option value="in">IN</option>
          </select>
          <select name="currency" id="currency" className="currency">
            <option value="dollar">&#36;</option>
            <option value="rupee">&#8377;</option>
          </select>
        </div>
        <div className="right-items flex-row">
          <div className="profile-items flex-row">
            <i className="far fa-user"></i>
            <span>My Profile</span>
          </div>
          <div className="purchased-item-details flex-row">
            <i className="fas fa-suitcase-rolling"></i>
            <span className="notification-badge">{cartLength}</span>
            <span>{cartLength} Items</span>
            <span>&#36;{totalCartItemAmount - discountAmount}</span>
          </div>
          <div className="search-bar">
            <div className="search-container">
              <input
                type="search"
                name="search"
                placeholder="Search..."
                autoFocus
                className="search"
              />
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="login-bar-mobile-view" id="login-bar-mobile-view">
        <p>iSHOP</p>
        <div className="menu-mobile" id="menu-mb">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Header;
