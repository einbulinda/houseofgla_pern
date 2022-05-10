import { Avatar } from "@mui/material";
import { UpdatesData } from "data";
import React from "react";
import "./Updates.scss";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <Avatar
              alt={update.profile}
              src={update.img}
              sx={{ width: 56, height: 56 }}
            />
            <div className="notify">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span>{update.notify}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
