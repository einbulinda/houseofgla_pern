import { Grid } from "@mui/material";
import MainDash from "components/AdminComponents/MainDash/MainDash";
import RightColumn from "components/AdminComponents/RightColumn/RightColumn";

const AdminDashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={8} xs={12} sm={12}>
        <MainDash />
      </Grid>
      <Grid item md={4} xs={12} sm={12}>
        <RightColumn />
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
