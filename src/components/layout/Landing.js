import PropTypes from "prop-types";
import React from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

const Landing = ({isAuthenticated}) => {

    if (isAuthenticated) {
        return <Navigate  to="/dashboard" />
      }
    return (
       <section className="landing">
           <div className="dark-overlay">
               <div className="landing-inner">
                   <h1 className="x-large">
                       Developer Networks
                   </h1>
                   <p className="leadd">
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur autem fuga, quasi culpa suscipit quisquam molestias veritatis, alias debitis quas maiores assumenda eveniet soluta. Sit?
                   </p>
                   <div className="buttons">
                       <Link className='btns btns-primarys' to="/register">Sign Up</Link>
                       <Link className='btns btns-primarys' to="/login">Login</Link>
                   </div>
               </div>
           </div>
       </section>
    );
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };
  const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated
  });
  export default connect(mapStateToProps)(Landing);