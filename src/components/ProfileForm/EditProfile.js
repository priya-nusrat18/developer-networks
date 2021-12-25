import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";
import {
  createProfile,
  getCurrentProfile,
} from "../../Redux/Actions/ProfileAction";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const EditProfile = ({
  createProfile,
  getCurrentProfile,
  profile: { profile, loading },
}) => {
  let navigate = useNavigate();
  const [socialFeilds, setSocialFeilds] = useState(true);
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    bio: "",
    status: "",
    githubusername: "",
    skills: "",
    youtube: "",
    twitter: "",
    facebook: "",
    instagram: "",
    linkedin: "",
  });
  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    twitter,
    facebook,
    instagram,
    linkedin,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    createProfile(formData, navigate, true);
  };
  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? "" : profile.company,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
      githubusername:
        loading || !profile.githubusername ? "" : profile.githubusername,
      skills: loading || !profile.skills ? "" : profile.skills.join(","),
      youtube: loading || !profile.youtube ? "" : profile.social.youtube,
      twitter: loading || !profile.twitter ? "" : profile.social.twitter,
      facebook: loading || !profile.facebook ? "" : profile.social.facebook,
      instagram: loading || !profile.instagram ? "" : profile.social.instagram,
      linkedin: loading || !profile.linkedin ? "" : profile.social.linkedin,
    });
  }, [loading , getCurrentProfile]);

  const handleAlert =()=>{
      alert('Profile-Updated-SuccessFully!')
  }
  return (
    <section class="container">
      <h1 class="large text-primarys">Create Your Profile</h1>
      <p class="leadd">
        <i class="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>

      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <select
            required
            name="status"
            defaultValue={status}
            onChange={(e) => onChange(e)}
          >
            <option defaultValue="0">* Select Professional Status</option>
            <option defaultValue="Developer">Developer</option>
            <option defaultValue="Junior Developer">Junior Developer</option>
            <option defaultValue="Senior Developer">Senior Developer</option>
            <option defaultValue="Manager">Manager</option>
            <option defaultValue="Student or Learning">
              Student or Learning
            </option>
            <option defaultValue="Instructor">Instructor or Teacher</option>
            <option defaultValue="Intern">Intern</option>
            <option defaultValue="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            defaultValue={company}
            onChange={(e) => onChange(e)}
            required
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input
            required
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input
            required
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className="form-group">
          <input
            required
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            onClick={() => setSocialFeilds(!socialFeilds)}
            type="button"
            class="btns btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {socialFeilds && (
          <>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x"></i>
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </>
        )}
        <input type="submit" className="btns btns-primarys my-1 " onClick={handleAlert} />
        <Link className="btns btns-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </section>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  EditProfile
);
