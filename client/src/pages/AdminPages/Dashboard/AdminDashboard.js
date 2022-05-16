import MainDash from "components/AdminComponents/MainDash/MainDash";
import RightColumn from "components/AdminComponents/RightColumn/RightColumn";
import "./AdminDashboard.scss";

const AdminDashboard = () => {
  return (
    <div className="AdminDashboard">
      <MainDash />
      <RightColumn />
    </div>
  );
};

export default AdminDashboard;
