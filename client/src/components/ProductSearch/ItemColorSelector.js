import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const ItemColorSelector = () => {
  const filteredProduct = useSelector((state) => state.filterProduct);
  const subcategoriesProducts = filteredProduct.subcategoriesProducts;
  const cpbFilter = useSelector((state) => state.updateCpbFilter);
  const colorSelect = cpbFilter.color;
  const dispatch = useDispatch();
  const productColor = [
    ...new Set(
      subcategoriesProducts.map((item) => {
        return item.color;
      })
    )
  ].sort();

  const [colorTextSet, setColorText] = useState("");
  useEffect(() => {
    setColorText(colorSelect);
    dispatch({ type: "PAGENUMBERUPDATE", payload: 1 });
  }, [colorSelect]);
  return (
    <div className="color-selector-container">
      <p className="data-category">COLOR</p>
      <div className="color-option">
        {productColor.map((color, index) => {
          return (
            <div
              className="outer-box"
              style={
                colorSelect === color
                  ? {
                      border: `2px solid ${
                        color === "other" ? "navajowhite" : color
                      }`,
                      borderRadius: "50%"
                    }
                  : null
              }
              key={index}
              onClick={() => {
                dispatch({ type: "COLORUPDATE", payload: color });
              }}
              onMouseEnter={() => setColorText(color)}
              onMouseLeave={() => setColorText(colorSelect)}
            >
              <div className={`inner-box ${color}`}></div>
            </div>
          );
        })}
        <div className="outer-box">
          <div
            className={`inner-box all-color`}
            style={{
              textAlign: "center",
              width: "2.5rem",
              fontSize: "0.7rem",
              height: "1rem",
              color: `${colorSelect === "all" ? "#48dbb3" : "black"}`
            }}
            onClick={() => dispatch({ type: "COLORUPDATE", payload: "all" })}
            onMouseEnter={() => setColorText("all")}
            onMouseLeave={() => setColorText(colorSelect)}
          >
            All Color
          </div>
        </div>
      </div>
      <p
        className="color-indicator"
        style={{
          color: `${
            colorTextSet !== "all"
              ? `${colorTextSet === "other" ? "navajowhite" : colorTextSet}`
              : "#48dbb3"
          }`
        }}
      >
        {colorTextSet}
      </p>
    </div>
  );
};

export default ItemColorSelector;
