import Sidebar from "components/AdminComponents/Sidebar/Sidebar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="AdminTheme">
      <div className="AppGlass">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
