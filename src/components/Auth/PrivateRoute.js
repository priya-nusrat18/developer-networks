import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = ({
  auth: { isAuthenticated, loading }
}) => {
  let location = useLocation();

  if (!isAuthenticated && !loading) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);
