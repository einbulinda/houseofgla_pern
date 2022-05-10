import { useState, useEffect } from "react";
import "./Sidebar.scss";
import Logo from "assets/logos/mainLogo.png";
import { UilBars, UilSignOutAlt } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { SidebarData } from "data";

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
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
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
                <span>{item.heading}</span>
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