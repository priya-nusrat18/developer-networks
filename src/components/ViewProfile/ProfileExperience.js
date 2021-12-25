import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({exp :{
    company , title , description , current, to , from , location
}}) => {
    return (
        <div>
            <h4 className="text-dark">{company}</h4>
            <p className="my-1">
                <Moment format = "YYYY-MM-DD">{from}</Moment> to {!to ? 'Now' : <Moment format = "YYYY-MM-DD">{to}</Moment>}
            </p>
            <p>
                <strong> Position : </strong> {title}
            </p>
            <p>
                <strong> Description : </strong> {description}
            </p>
        </div>
    );
};

ProfileExperience.propTypes = {
    exp: PropTypes.array.isRequired
};

export default ProfileExperience;