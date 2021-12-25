import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    skills,
    company,
    location,
  },
}) => {
  return (
    <div className="container">
      <div className="profile bg-light">
        <img src={avatar} alt="" className="round-img" />
        <div>
          <h2>{name}</h2>
          <p className="my-1">
            {status} {company && <span> at {company}</span>}
          </p>
          <p className="my-2">{location && <span> at {location}</span>}</p>
          <Link to={`/profile/${_id}`} className="btns btns-primarys">
            View profile
            
          </Link>
        </div>
        <ul>
          {skills.slice(0, 4).map((skill, index) => (
            <li className="text-primarys" key={index}>
                <i className="fas fa-check">
                    {skill}
                </i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
