import { Typography } from "@mui/material";
import React from "react";
import Cards from "../Cards/Cards";
import BasicTable from "../Table/Table";
import "./MainDash.scss";

const MainDash = () => {
  return (
    <div className="MainDash">
      <Typography variant="h2" component="div" gutterBottom>
        Dashboard
      </Typography>
      <Cards />
      <BasicTable />
    </div>
  );
};

export default MainDash;
