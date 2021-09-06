import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const NavItemExploreContainer = ({ category, subcategories, products }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleItemClicked = (subcategory) => {
    const filterSubcategoryProductArray = products.filter((product) => {
      return product.subcategory === subcategory;
    });
    dispatch({ type: "CATEGORY", payload: products });
    dispatch({ type: "SUBCATEGORY", payload: filterSubcategoryProductArray });
    history.push(`/${category}/${subcategory}`);
  };
  return (
    <>
      <div className="arrow-up" id="arrow-up-container"></div>
      <div className={`navitem-explore`} id="navitem-explore-container">
        {subcategories.map((item, index) => {
          const { logo_src, logo_des } = item;
          return (
            <div
              className="navitems"
              key={index}
              onClick={() => handleItemClicked(logo_des.toLowerCase())}
            >
              <div className="navitems-img">
                <img src={logo_src} alt={`category: ${category}`} />
              </div>
              <p id="nav-img-log">{logo_des}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NavItemExploreContainer;
