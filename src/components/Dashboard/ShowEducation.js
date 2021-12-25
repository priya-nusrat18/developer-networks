import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEducation } from "../../Redux/Actions/ProfileAction";

const ShowEducation =({education , deleteEducation}) => {
  const educations = education.map((edu) => {
    return (
      <tr key={edu._id}>
        <td>{edu.school} </td>
        <td className="hide-sm">{edu.degree} </td>
        <td>
          <Moment format="YYYY/MM/DD">{edu.form}</Moment> to{" "}
          {edu.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </td>
        <td>
            <button onClick={()=>deleteEducation(edu._id)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <h2 className="my-3">Education Credentials</h2>
      <table className="tablee">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
          </tr>
        </thead>
        <tbody>
            {educations}
        </tbody>
      </table>
    </>
  );
};

ShowEducation.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation : PropTypes.func.isRequired,
};

export default connect(null , {
    deleteEducation
}) (ShowEducation);
