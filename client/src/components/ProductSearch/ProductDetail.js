import React from "react";
import ItemCategory from "./ItemCategory";
import ItemPriceRange from "./ItemPriceRange";
import ItemColorSelector from "./ItemColorSelector";
import More from "./More";
import ItemFilterDisplayContainer from "./ItemFilterDisplayContainer";
import ProductDisplay from "./ProductDisplay";
import BrandProduct from "./BrandProduct";

const ProductDetail = () => {
  return (
    <div className="product-data-load">
      <div className="data-filter-function" id="data-filter-function">
        <ItemCategory />
        <ItemPriceRange />
        <ItemColorSelector />
        <BrandProduct />
        <More />
      </div>
      <div>
        <ItemFilterDisplayContainer />
        <ProductDisplay />
      </div>
    </div>
  );
};

export default ProductDetail;
