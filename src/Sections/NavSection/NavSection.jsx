import React, { useState } from "react";
import "./navSection.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavSection({ checkMenuClicked, setCheckMenuClicked }) {
  
  const handleMenuClick = () => {
    setCheckMenuClicked(!checkMenuClicked);
  };
  
  return (
    <div className="header">
      <div className="logo">
        BANKOLE <br /> THEOPHILUS
      </div>
      <div className="menus">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </div>
      <div className="toggleLight">
        <div className="toggleSocket">
          <div className="toggleBall"></div>
        </div>
      </div>
      <div className="menu-icon" onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars}  
        />
      </div>
    </div>
  );
}
