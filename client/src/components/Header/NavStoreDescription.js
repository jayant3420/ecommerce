import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const NavStoreDescription = (props) => {
  const history = useHistory();
  const classString = props.class;
  const products = props.products;
  let keys = [];
  for (const key in classString) {
    keys.push(key);
  }
  const dispatch = useDispatch();

  const headLineClicked = (category, subcategory) => {
    const filteredCategProductArray = products.filter((product) => {
      return product.category === category;
    });
    const filterSubcategoryProductArray = filteredCategProductArray.filter(
      (product) => {
        return (
          product.category === category && product.subcategory === subcategory
        );
      }
    );
    dispatch({ type: "CATEGORY", payload: filteredCategProductArray });
    dispatch({ type: "SUBCATEGORY", payload: filterSubcategoryProductArray });
    history.push(`/${category}/${subcategory}`);
  };

  return (
    <>
      <div className="arrow-up" id="arrow-up-store"></div>
      <div className={`navitem-explore`} id="navitem-explore-store">
        {keys.map((item, index) => {
          return (
            <div className="navitem" key={index}>
              <h3>{item}</h3>
              <ul>
                {classString[item].map((li, liIndex) => {
                  return (
                    <li
                      key={liIndex}
                      onClick={() =>
                        headLineClicked(item.toLowerCase(), li.toLowerCase())
                      }
                    >
                      {li}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NavStoreDescription;
