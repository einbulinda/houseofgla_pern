import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightColumn.scss";

const RightColumn = () => {
  return (
    <div className="RightColumn">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Reviews</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightColumn;
