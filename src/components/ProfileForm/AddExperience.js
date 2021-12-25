import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperiecne } from "../../Redux/Actions/ProfileAction";
import { Link, useNavigate } from "react-router-dom";
const AddExperience = ({ addExperiecne }) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });
  const [toDateDisable, setToggleDisable] = useState(false);

  const { company, title, description, from, to, location, current } = formData;
 
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 

  return (
    <section className="container">
      <h1 className="large text-primarys">Add An Experience</h1>
      <p className="leadd">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>

      <form className="form" onSubmit={e=>{
        e.preventDefault();
        addExperiecne(formData , navigate)
      }}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Job Title"
            name="title"
            required
            value={title}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Company"
            name="company"
            required
            value={company}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            required
            value={location}
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
            Current Job
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

AddExperience.propTypes = {
  addExperiecne: PropTypes.func.isRequired,
};

export default connect(null, {
  addExperiecne,
})(AddExperience);
