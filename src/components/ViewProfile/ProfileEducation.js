import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({edu :{
    school , degree , description , current, to , from , fieldofstudy,
}}) => {
    return (
        <div>
            <h4 className="text-dark">{school}</h4>
            <p className="my-1">
                <Moment format = "YYYY-MM-DD">{from}</Moment> to {!to ? 'Now' : <Moment format = "YYYY-MM-DD">{to}</Moment>}
            </p>
            <p>
                <strong> Degree : </strong> {degree}
            </p>
            <p>
                <strong> Feild Of Study : </strong> {fieldofstudy}
            </p>
            <p>
                <strong> Description : </strong> {description}
            </p>
        </div>
    );
};

ProfileEducation.propTypes = {
    edu: PropTypes.array.isRequired
};

export default ProfileEducation;