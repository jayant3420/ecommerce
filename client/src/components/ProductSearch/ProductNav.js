import React from "react";
import { useLocation } from "react-router-dom";

const ProductNav = ({ screen }) => {
  const location = useLocation();
  const locArray = location.pathname.split("/");
  return (
    <div className={`product-nav-container ${screen}`}>
      <span className="product-nav-detail">
        {locArray[1].charAt(0).toUpperCase() + locArray[1].slice(1)}{" "}
        <span>&#8725;</span>{" "}
        {locArray[2].charAt(0).toUpperCase() + locArray[2].slice(1)}
      </span>
    </div>
  );
};

export default ProductNav;
