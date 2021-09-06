import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const navClose = () => {
  const navBar = document.getElementById("navigation-bar");
  const navMobile = document.getElementById("nav-mobile-view");
  const navTop = document.getElementById("login-bar-mobile-view");
  const mainContainer = document.getElementById("main-container");
  navMobile.style.display = "none";
  navBar.classList.add("navigation-bar");
  navBar.classList.remove("navigation-bar-mb");
  navTop.style.filter = "none";
  mainContainer.style.filter = "none";
  navTop.style.pointerEvents = "auto";
  mainContainer.style.pointerEvents = "auto";
};

const NavMobileView = () => {
  useEffect(() => {
    const closeBtn = document.getElementById("fa-times-close");
    closeBtn.addEventListener("click", navClose);
    return () => {
      closeBtn.removeEventListener("click", navClose);
    };
  }, []);

  const cartData = useSelector((state) => state.cartData);
  const cart = cartData.cart;
  const totalItems = cart.reduce((acc, cur) => {
    acc = acc + cur.quantity;
    return acc;
  }, 0);
  const totalBill = cart.reduce((acc, cur) => {
    acc = acc + cur.new_price * cur.quantity;
    return acc;
  }, 0);
  return (
    <div className="nav-mobile-view" id="nav-mobile-view">
      <p className="nav-close">
        <i className="fas fa-times" id="fa-times-close"></i>
      </p>
      <div className="user-profile-mb">
        <div className="bill-detail-mb">
          <i className="fas fa-suitcase-rolling suitcase-mb"></i>
          <span className="notification-icon-mb">{totalItems}</span>
          <span className="cart-item-mb">{totalItems} items</span>
          <span className="cart-bill-mb">&#36;{totalBill}</span>
        </div>
        <div className="profile-name-mb">
          <i className="far fa-user"></i>
          <span>My Profile</span>
        </div>
        <div className="lang-cur-mb">
          <select name="language-mb" id="language-mb" className="language-mb">
            <option value="en">EN</option>
            <option value="in">IN</option>
          </select>
          <select name="currency-mb" id="currency-mb" className="currency-mb">
            <option value="dollar">&#36;</option>
            <option value="rupee">&#8377;</option>
          </select>
        </div>
      </div>
      <div className="search-box-mb">
        <i className="fas fa-search search-mb"></i>
        <input type="text" />
      </div>
    </div>
  );
};

export default NavMobileView;
