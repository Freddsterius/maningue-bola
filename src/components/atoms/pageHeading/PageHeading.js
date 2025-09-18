import React from "react";
import "./PageHeading.css";

const PageHeading = ({ headingName }) => {
  return (
    <div className="page-heading-container">
      <h1>{headingName}</h1>
    </div>
  );
};

export default PageHeading;
