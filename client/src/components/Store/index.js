import React from "react";
import "./storestyle.css";
import Footer from "../Footer/footer";
import StoreHead from "./StoreHead";
import BestSeller from "./BestSeller";
import IphoneAdvertise from "./IphoneAdvertise";
import Facilities from "./Facilities";
import FeaturedProducts from "./FeaturedProducts";
import AdContainer from "../ProductSearch/AdContainer";

const Index = () => {
  return (
    <>
      <StoreHead />
      <BestSeller />
      <IphoneAdvertise />
      <AdContainer screen={"mobile"} />
      <Facilities />
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default Index;
