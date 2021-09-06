import React, { useContext } from "react";
import { context } from "./index";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ItemCategory = () => {
  const { cat, sub } = useContext(context);
  const filteredProduct = useSelector((state) => state.filterProduct);
  const categoriesProducts = filteredProduct.categoriesProducts;
  const history = useHistory();
  const dispatch = useDispatch();

  /*Category-wise product with frequency of each product*/
  const subCategoryMap = new Map();
  categoriesProducts.forEach((item, index) => {
    const subcategory = item.subcategory;
    if (subCategoryMap.has(subcategory)) {
      let count = subCategoryMap.get(subcategory);
      subCategoryMap.set(subcategory, count + 1);
    } else {
      subCategoryMap.set(subcategory, 1);
    }
  });
  const subcategories = [...subCategoryMap];

  let subcategoryProductArray = [];
  const subCategoryChange = (subcategory) => {
    history.push(`/${cat}/${subcategory}`);
    subcategoryProductArray = categoriesProducts.filter((product) => {
      return product.subcategory === subcategory;
    });
    dispatch({ type: "SUBCATEGORY", payload: subcategoryProductArray });
    dispatch({
      type: "TOTALPRODUCTUPDATE",
      payload: subcategoryProductArray.length
    });
    dispatch({ type: "BRANDUPDATE", payload: "all" });
    dispatch({ type: "COLORUPDATE", payload: "all" });
    dispatch({ type: "PAGENUMBERUPDATE", payload: 1 });
  };

  return (
    <div className="item-category">
      <p className="data-category">{cat}</p>
      {subcategories.map((item, index) => {
        return (
          <p
            key={index}
            className={`scp ${item[0] === sub ? "subcategory-active" : ""}`}
            onClick={() => subCategoryChange(item[0])}
          >
            <span>{item[0]}</span>
            <span>{item[1]}</span>
          </p>
        );
      })}
    </div>
  );
};

export default ItemCategory;
