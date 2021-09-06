import React, { useEffect } from "react";
import ItemDisplayMenuBar from "./ItemDisplayMenuBar";
import SelectSortBy from "./SelectSortBy";
import { useSelector } from "react-redux";
import SelectShow from "./SelectShow";

const FilterItemDisplay = () => {
  const totalDisplayProducts = useSelector(
    (state) => state.updateTotalProducts
  );
  const totalProducts = totalDisplayProducts.totalProducts;

  const filterContainer = () => {
    const filterFunction = document.getElementById("data-filter-function");
    const downArrowMb = document.getElementById("down-arrow-filter-mb");
    if (filterFunction.style.display === "none") {
      filterFunction.style.display = "block";
      downArrowMb.style.display = "block";
    } else {
      filterFunction.style.display = "none";
      downArrowMb.style.display = "none";
    }
  };

  return (
    <>
      <div className="filter-container">
        <div className="filter-left-part">
          <span id="totalItems">{`${totalProducts} Items`}</span>
          <div className="sortby-block">
            <span>Sort By</span>
            <SelectSortBy />
          </div>
          <div className="show-block">
            <span>Show</span>
            <SelectShow totalItems={totalProducts} />
          </div>
          <div
            className="mobile-filter"
            id="mobile-filter"
            onClick={() => filterContainer()}
          >
            <i className="fas fa-filter"></i>
            <span>Filter</span>
          </div>
          <div id="down-arrow-filter-mb"></div>
        </div>
        <ItemDisplayMenuBar />
      </div>
    </>
  );
};

export default FilterItemDisplay;
