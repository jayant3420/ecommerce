import React from "react";
import Header from "./header";
import Navigation from "./navigation";
import Home from "./../Home/index";
import Store from "./../Store/index";
import Iphone from "./../Iphone/index";
import Ipad from "./../Ipad/index";
import Macbook from "./../Macbook/index";
import Accesories from "./../Accesories/index";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

const index = () => {
  return (
    <>
      <Header />
      <Router>
        <Navigation />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/store" component={Store} />
          <Route path="/iphone" component={Iphone} />
          <Route path="/ipad" component={Ipad} />
          <Route path="/macbook" component={Macbook} />
          <Route path="/accesories" component={Accesories} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </>
  );
};

export default index;
