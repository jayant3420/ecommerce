import React, { useEffect } from "react";
import "./homestyle.css";
import Cartdetails from "./cartdetails";
import Hometitle from "./hometitle";
import Cartitembilling from "./cartitembilling";
import Footer from "../Footer";
import { useLocation } from "react-router";

const Index = () => {
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
      <Hometitle />
      <Cartdetails />
      <Cartitembilling />
      <Footer />
    </>
  );
};

export default Index;
