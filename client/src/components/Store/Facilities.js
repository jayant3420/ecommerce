import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../Url/url";

const Facilities = () => {
  const [facilites, setFacilities] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/store/facilities`)
      .then((response) => setFacilities(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="facilities flex-row">
      {facilites.map((item) => {
        const { id, para1, para2, icon_class } = item;
        return (
          <div className="facility-item" key={id}>
            <i className={icon_class}></i>
            <p>{para1}</p>
            <p>{para2}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Facilities;
