import React from "react";
import { NavLink } from "react-router-dom";
import url from "./../Url/url";
import { useState, useEffect } from "react";
import axios from "axios";

const Navigation = () => {
  const [menuData, setMenuData] = useState([]);
  const getNavData = () => {
    axios
      .get(`${url}/home`)
      .then((response) => setMenuData(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getNavData();
  }, []);
  return (
    <>
      <div className="navigation-container">
        <p>iSHOP</p>
        <div className="navigation-bar">
          <ul className="nav-ul">
            {menuData.map((item, index) => {
              return (
                <NavLink
                  to={`/${item.name}`}
                  className="nav-link"
                  activeClassName="selected"
                  key={index}
                >
                  <li>{item.name}</li>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
