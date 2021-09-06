import React, { createContext, useEffect } from "react";
import { useParams, useLocation, useRouteMatch } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import "./productdetailstyle.css";
import ProductNav from "./ProductNav";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const context = createContext();

const Index = ({ category }) => {
  const dispatch = useDispatch();
  const { subcategory } = useParams();
  const catData = { cat: category, sub: subcategory };
  const productsDetail = useSelector((state) => state.productsDetail);
  const products = productsDetail.products;
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
  useEffect(() => {
    const categoryDataFetch = () => {
      dispatch({ type: "CATEGORY", payload: filteredCategProductArray });
      dispatch({ type: "SUBCATEGORY", payload: filterSubcategoryProductArray });
    };
    categoryDataFetch();
  }, [filteredCategProductArray, filterSubcategoryProductArray]);

  const location = useLocation();
  const menuManupilate = () => {
    const navBar = document.getElementById("navigation-bar");
    const navMobile = document.getElementById("nav-mobile-view");
    const navTop = document.getElementById("login-bar-mobile-view");
    const mainContainer = document.getElementById("main-container");
    navMobile.style.display = "none";
    navBar.classList.add("navigation-bar");
    navBar.classList.remove("navigation-bar-mb");
    navTop.style.filter = "none";
    mainContainer.style.filter = "none";
    navTop.style.pointerEvents = "auto";
    mainContainer.style.pointerEvents = "auto";
  };

  useEffect(() => {
    menuManupilate();
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <div className="product-detail-container">
        <ProductNav screen={"web"} />
        <context.Provider value={catData}>
          <ProductDetail />
        </context.Provider>
      </div>
    </>
  );
};

export default Index;
export { context };
