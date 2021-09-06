import React, { useContext, useEffect } from "react";
import RangeSlider from "./RangeSlider";
import { useSelector, useDispatch } from "react-redux";
import { context } from "./index";

const ItemPriceRange = () => {
  const { sub } = useContext(context);
  const filteredProduct = useSelector((state) => state.filterProduct);
  const categoriesProducts = filteredProduct.categoriesProducts;
  const cpbFilter = useSelector((state) => state.updateCpbFilter);
  const priceRange = cpbFilter.priceRange;
  const dispatch = useDispatch();
  let min = 1;
  let max = 0;
  categoriesProducts.forEach((item) => {
    if (item.new_price < min && item.subcategory === sub) {
      min = item.new_price;
    }
    if (item.new_price > max && item.subcategory === sub) {
      max = item.new_price;
    }
  });
  useEffect(() => {
    dispatch({ type: "PRICERANGEUPDATE", payload: [min, max] });
  }, [min, max]);
  return (
    <>
      <div className="item-price-range">
        <p className="data-category">PRICES</p>
        <div className="range-container">
          <span>Range:</span>
          <p>
            <span>&#36;{priceRange[0]}</span>
            <span> - </span>
            <span>&#36;{priceRange[1]}</span>
          </p>
        </div>
        <RangeSlider min={min} max={max} />
      </div>
    </>
  );
};

export default ItemPriceRange;
