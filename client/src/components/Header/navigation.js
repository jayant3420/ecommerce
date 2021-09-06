import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNavigationData } from "../actions/navigation";
import NavStoreDescription from "./NavStoreDescription";
import NavItemExploreContainer from "./NavItemExploreContainer";

const Navigation = () => {
  const storedata = useSelector((state) => state.navdata);
  const productsDetail = useSelector((state) => state.productsDetail);
  const products = productsDetail.products;
  const navbardata = storedata.items;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNavigationData());
  }, []);

  return (
    <>
      <div className="navigation-container" id="navigation-container">
        <p>iSHOP</p>
        <div className="navigation-bar" id="navigation-bar">
          <ul className="nav-ul">
            {navbardata.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={`/${item.name}`}
                    className="nav-link"
                    activeClassName="selected"
                    key={index}
                  >
                    <span className="ni">{item.name}</span>
                  </NavLink>
                  {item.name === "store" ? (
                    <NavStoreDescription
                      class={item.data}
                      products={products}
                    />
                  ) : item.name !== "home" && item.name !== "store" ? (
                    <NavItemExploreContainer
                      category={item.name}
                      subcategories={item.data}
                      products={products.filter((product) => {
                        return product.category === item.name;
                      })}
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
