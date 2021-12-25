import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../Redux/Actions/ProfileAction";
import { Link, useNavigate } from "react-router-dom";

const AddEducation = ({ addEducation }) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });
  const [toDateDisable, setToggleDisable] = useState(false);

  const { degree, school, description, from, to, fieldofstudy, current } =
    formData;
  console.log(formData);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="container">
      <h1 className="large text-primarys">Add Education</h1>
      <p className="leadd">
        <i className="fas fa-code-branch"></i> Add any school or bootcamp you have attended.
      </p>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, navigate);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* school"
            name="school"
            required
            value={school}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* degree"
            name="degree"
            required
            value={degree}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Field of study"
            name="fieldofstudy"
            required
            value={fieldofstudy}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              defaultValue={current}
              checked={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                setToggleDisable(!toDateDisable);
              }}
            />{" "}
            Current School
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisable ? "disabled" : ""}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type="submit" className="btns btns-primarys my-1" />
        <Link className="btns btns-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </section>
  );
};

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
};

export default connect(null, {
    addEducation,
})(AddEducation);
