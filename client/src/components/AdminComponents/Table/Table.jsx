import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
// import "./Table.scss";
import { tableData } from "data";

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

const BasicTable = () => {
  return (
    <Paper elevation={1} sx={{ marginY: "1.5rem", padding: "1rem" }}>
      <Typography variant="h5" component="div" gutterBottom>
        Recent Orders
      </Typography>

      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {tableData.map((order) => (
              <TableRow
                key={order.trackingID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.name}
                </TableCell>
                <TableCell align="left">{order.trackingID}</TableCell>
                <TableCell align="left">{order.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(order.status)}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default BasicTable;
