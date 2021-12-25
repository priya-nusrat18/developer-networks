import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAccount, getCurrentProfile } from "../../Redux/Actions/ProfileAction";
import Spinner from "../../utili/Spinner";
import DashboardWork from "./DashboardWork";
import ShowEducation from "./ShowEducation";
import ShowExperience from "./ShowExperience";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth,
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Container>
        <div className="dashboard-heading text-center">
          <h1 className="large text-primarys mt-2">Dashboard</h1>
          <p className="leadd ">
            <i className="fas fa-user me-2 text-primarys"></i>
            Welcome
            <span className=" ps-2  text-primarys fw-bold">
              {auth.user && auth.user.name}
            </span>
          </p>
        </div>
        <div>
          {profile !== null ? (
            <>
              <DashboardWork />
              <ShowExperience experience={profile.experience} />
              <ShowEducation education={profile.education} />

              <div className="my-3">
                <button onClick={() => deleteAccount()} className="btn btn-danger">
                  <i className="me-2 fas fa-user-minus"></i>
                  Delete My Account
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                {" "}
                <p className="leadd">
                  You have not a set up a profile yet , Please add some info.
                </p>
                <Link className="btns btns-primarys" to="/create-profile">
                  Create Profile
                </Link>
              </div>
            </>
          )}
        </div>
      </Container>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteAccount : PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount
})(Dashboard);
