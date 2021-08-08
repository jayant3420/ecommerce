import React from "react";
import "./headerstyle.css";

const header = () => {
  return (
    <>
      <div className="login-bar flex-row">
        <div className="left-items flex-row">
          <div className="encoded-type">
            <select name="encoded" id="encodedId" className="encoded">
              <option value="en">EN</option>
              <option value="in">IN</option>
            </select>
          </div>
          <div className="currency-type">
            <select name="currency" id="currency" className="currency">
              <option value="dollar">&#36;</option>
              <option value="rupees">&#8377;</option>
            </select>
          </div>
        </div>
        <div className="right-items flex-row">
          <div className="profile-items">
            <i className="far fa-user"></i>
            <span>My Profile</span>
          </div>
          <div className="purchased-item-details flex-row">
            <i className="fas fa-suitcase-rolling"></i>
            <span className="notification-badge">2</span>
            <span>2 Items</span>
            <span>&#36;998</span>
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
              <button>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr id="login-bar-underline" />
    </>
  );
};

export default header;
