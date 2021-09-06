import React from "react";
import Header from "./header";
import Navigation from "./navigation";
import Home from "./../Home";
import Store from "./../Store";
import ProductSearch from "../ProductSearch";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import NavMobileView from "./NavMobileView";
import Checkout from "../Home/Checkout";

const Index = () => {
  return (
    <>
      <Checkout />
      <div id="root-container">
        <Header />
        <Router>
          <Navigation />
          <div className="main-container" id="main-container">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/store" component={Store} />
              <Route
                path="/iphone/:subcategory"
                component={() => <ProductSearch category={"iphone"} />}
              />
              <Route
                path="/ipad/:subcategory"
                component={() => <ProductSearch category={"ipad"} />}
              />
              <Route
                path="/accessories/:subcategory"
                component={() => <ProductSearch category={"accessories"} />}
              />
              <Route
                path="/macbook/:subcategory"
                component={() => <ProductSearch category={"macbook"} />}
              />
              <Route
                path="/apple watch/:subcategory"
                component={() => <ProductSearch category={"apple watch"} />}
              />
              <Redirect to="/home" />
            </Switch>
          </div>
        </Router>
        <NavMobileView />
      </div>
    </>
  );
};

export default Index;
