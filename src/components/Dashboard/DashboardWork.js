import React from "react";
import { Link } from "react-router-dom";

const DashboardWork = (props) => {
  return (
    <div class="dash-buttons text-center my-3">
      <Link to="/edit-profile" class="btns btns-light">
        <i class="fas fa-user-circle text-primarys"></i> Edit Profile
      </Link>
      <Link to="/add-experience" class="btns btns-light">
        <i class="fab fa-black-tie text-primarys"></i> Add Experience
      </Link>
      <Link to="/add-education" class="btns btns-light">
        <i class="fas fa-graduation-cap text-primarys"></i> Add Education
      </Link>
    </div>
  );
};

export default DashboardWork;
