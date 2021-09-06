import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bestSellerNavFetch } from "../actions/store/bestSellerNav";
import { BestSellerItemList } from "./BestSellerItemList";

export const BestSellerNavigationBar = () => {
  const [category, setCategory] = useState("all");
  const bestSeller = useSelector((state) => state.bestSellerNavData);
  const bestSellerArray = bestSeller.bestsellernav;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bestSellerNavFetch());
  }, []);

  const buttonFocus = (clsName) => {
    setCategory(clsName);
  };

  const selectFocus = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <div className="bestseller-navigation-container">
        <div className="bestseller-navigation flex-row">
          {bestSellerArray.map((item) => {
            const { id, navItem } = item;
            return (
              <button
                className={`bestseller-nav-btn ${
                  category === navItem ? "clicked" : ""
                }`}
                onClick={() => buttonFocus(navItem)}
                key={id}
              >
                {navItem}
              </button>
            );
          })}
        </div>
      </div>
      <div className="bestseller-mobile">
        <select
          name="bestseller-nav-mobile"
          id="bestseller-nav-mobile"
          onChange={selectFocus}
        >
          {bestSellerArray.map((item) => {
            const { id, navItem } = item;
            return (
              <option value={navItem.toLowerCase()} key={id}>
                {navItem}
              </option>
            );
          })}
        </select>
      </div>
      <BestSellerItemList category={category} />
    </>
  );
};

const BestSeller = () => {
  return (
    <div className="bestseller-container">
      <p className="bestseller-container-heading">best seller</p>
      <BestSellerNavigationBar />
    </div>
  );
};

export default BestSeller;
