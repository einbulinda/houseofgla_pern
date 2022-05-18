import { useState, useEffect } from "react";
import "./Sidebar.scss";
import Logo from "assets/logos/mainLogo.png";
import { UilBars, UilTimes, UilSignOutAlt } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { SidebarData } from "data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const getScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  const sidebarVariants = {
    true: { left: "0" },
    false: { left: "-60%" },
  };

  useEffect(() => {
    window.addEventListener("resize", getScreenWidth);

    return () => {
      window.removeEventListener("resize", getScreenWidth);
    };
  }, [screenWidth]);

  return (
    <>
      <div
        className={`humbugger ${expanded ? "times" : "bars"}`} //Have the times when menu is open.
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? <UilTimes /> : <UilBars />}
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={screenWidth <= 768 ? `${expanded}` : ""}
      >
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <Link to={item.path} className="sideLink">
                  {item.heading}
                </Link>
              </div>
            );
          })}

          {/* SignoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
