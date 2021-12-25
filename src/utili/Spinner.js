import React, { Fragment } from "react";
import spinner from "../img/sample.gif";
const Spinner = () => {
  return (
    <Fragment>
      <img
        style={{ width: "200px", display: "block", margin: "auto" }}
        src={spinner}
        alt="loading...."
      />
    </Fragment>
  );
};

export default Spinner;
