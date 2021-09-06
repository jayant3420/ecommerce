import React from "react";
import { useSelector, useDispatch } from "react-redux";

const BrandProduct = () => {
  const cpbFilter = useSelector((state) => state.updateCpbFilter);
  const dispatch = useDispatch();
  const brand = cpbFilter.brand;
  const filteredProduct = useSelector((state) => state.filterProduct);
  const categoriesProducts = filteredProduct.subcategoriesProducts;

  const productBrand = [
    ...new Set(
      categoriesProducts.map((item) => {
        return item.brand;
      })
    )
  ].sort((a, b) => {
    const nameA = a.toUpperCase();
    const nameB = b.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="product-brand">
      <p className="data-category">Brand</p>
      {productBrand.map((item, index) => {
        return (
          <p
            className={`scp ${brand === item ? "subcategory-active" : ""}`}
            key={index}
            onClick={() => {
              dispatch({ type: "BRANDUPDATE", payload: item });
              dispatch({ type: "PAGENUMBERUPDATE", payload: 1 });
            }}
          >
            {item}
          </p>
        );
      })}
      <p
        className={`scp ${brand === "all" ? "subcategory-active" : ""}`}
        onClick={() => {
          dispatch({ type: "BRANDUPDATE", payload: "all" });
          dispatch({ type: "PAGENUMBERUPDATE", payload: 1 });
        }}
      >
        all
      </p>
    </div>
  );
};

export default BrandProduct;
