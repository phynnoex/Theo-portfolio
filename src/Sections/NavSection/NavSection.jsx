import React, { useState } from "react";
import "./navSection.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animate, delay, easeIn, motion } from "framer-motion";
import Tooltip from "../../components/tooltip";
import { Link } from "react-scroll";

export default function NavSection({ checkMenuClicked, setCheckMenuClicked, toggleState, setToggleState }) {
  const handleMenuClick = () => {
    setCheckMenuClicked(!checkMenuClicked);
  };
  const [hoveredToggleButton, setHoveredToggleButton] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        BANKOLE. <br /> THEOPHILUS
      </div>
      <div className="menus">
        <ul>
          <li>
            <Link
              to="About"
              smooth={true}
              duration={500}
              onClick={() => setCheckMenuClicked(false)}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="Projects"
              smooth={true}
              duration={500}
              onClick={() => setCheckMenuClicked(false)}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="Contacts"
              smooth={true}
              duration={500}
              onClick={() => setCheckMenuClicked(false)}
            >
              CONTACTS
            </Link>
          </li>
           <li className="new-menu">
            <Link
              
              to="Designs"
              smooth={true}
              duration={500}
              onClick={() => setCheckMenuClicked(false)}
            >
              DESIGNS
              
            </Link>
            <div className="indicator-wrapper">
                  <div className="indicator"></div>
              </div>
          </li>
        </ul>
      </div>
      <div className="toggleLight">
        <motion.div
          className="toggleSocket"
          onHoverStart={() => setHoveredToggleButton(true)}
          onHoverEnd={() => setHoveredToggleButton(false)}
          animate={{
            backgroundColor: toggleState ? "rgb(87, 87, 87)" : "rgb(34, 34, 34)",
            
          }}
        >
          <motion.div className="toggleBall"
          animate={{x:toggleState ? 0 : -33}}
          onClick={
            () => {
              
              setToggleState(!toggleState);
            }
          }></motion.div>
        </motion.div>
      </div>
      <div className="menu-icon" onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <Tooltip
        content=  {toggleState ? "disable interactive ball effect" : "enable interactive ball effect"}
        hoveredToggleButton={hoveredToggleButton}
      />
    </div>
  );
}
