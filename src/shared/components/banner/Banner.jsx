import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="tp-banner-container">
      <div
        className="tp-banner revslider-initialised tp-simpleresponsive"
        id="revslider-918"
      >
        <ul className="tp-banner-list">
          <li className="tp-banner-item">
            <div className="slotholder">
              <div className="tp-bgimg defaultimg" />
            </div>
          </li>
        </ul>
        <div className="tp-loader" />
        <div className="tp-bannertimer" />
      </div>
    </div>
  );
};

export default Banner;
