import MainDash from "components/AdminComponents/MainDash/MainDash";
import RightColumn from "components/AdminComponents/RightColumn/RightColumn";
import Sidebar from "components/AdminComponents/Sidebar/Sidebar";
import React from "react";

const AdminDash = () => {
  return (
    <div className="AdminTheme">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightColumn />
      </div>
    </div>
  );
};

export default AdminDash;
