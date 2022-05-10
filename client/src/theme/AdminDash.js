import MainDash from "components/AdminComponents/MainDash/MainDash";
import Sidebar from "components/AdminComponents/Sidebar/Sidebar";
import React from "react";

const AdminDash = () => {
  return (
    <div className="AdminTheme">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
      </div>
    </div>
  );
};

export default AdminDash;
