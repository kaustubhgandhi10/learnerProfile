import React from "react";
import banner from "../images/banner.png";
import "../styles/banner.css";

export const Banner = () => {
  return (
    <div id="banner">
      <img className="w-100" src={banner} alt="Bannner" />
    </div>
  );
};
