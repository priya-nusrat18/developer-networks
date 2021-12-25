import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteExperience } from "../../Redux/Actions/ProfileAction";

const ShowExperience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => {
    return (
      <tr key={exp._id}>
        <td>{exp.company} </td>
        <td className="hide-sm">{exp.title} </td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.form}</Moment> to{" "}
          {exp.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={() => deleteExperience(exp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <h2 className="my-3">Experience Credentials</h2>
      <table className="tablee">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </>
  );
};

ShowExperience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, {
  deleteExperience
})(ShowExperience);
