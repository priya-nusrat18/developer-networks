import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfiles } from "../../Redux/Actions/ProfileAction";
import Spinner from "../../utili/Spinner";
import ProfileItem from "./ProfileItem";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
      <div className="form-bg2">
    < div className="container">
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <h1 className="largee text-primarys pt-3">Developers</h1>
          <p className="leadd my-3">
            <i className="me-3 fab fa-connectdevelop">
              Browse and connect with developers
            </i>
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((item) => (
                <ProfileItem key={item._id} profile={item} />
              ))
            ) : (
              <h4 className="my-3">No profiles found </h4>
            )}
          </div>
        </>
      )}
    </div>
    </div>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, {
  getProfiles,
})(Profiles);
