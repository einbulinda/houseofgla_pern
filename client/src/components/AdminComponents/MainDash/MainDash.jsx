import React from "react";
import Cards from "../Cards/Cards";
import "./MainDash.scss";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
    </div>
  );
};

export default MainDash;
