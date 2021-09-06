import React from "react";

const AdContainer = ({ screen }) => {
  return (
    <div className={`di-advertise-container ${screen}`}>
      <div className="di-ad-text">
        <p>iPhone8</p>
        <p>Performance and design. Taken right to the edge.</p>
        <p>SHOP NOW</p>
      </div>

      <img
        src="/images/mobile1.jpg"
        alt="Mobile1 adversitse"
        className="item-dis-img1"
      />
      <img
        src="/images/mobile1.jpg"
        alt="Mobile2 adversitse"
        className="item-dis-img2"
      />
    </div>
  );
};

export default AdContainer;
