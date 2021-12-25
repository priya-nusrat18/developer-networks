import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { setAlert } from '../../Redux/Actions/alertAction';
import { authRegister } from "../../Redux/Actions/AuthActions";

const Register = ({authRegister , setAlert , isAuthenticated}) => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const signupSubmit = (data) => {
    const userDetails = { ...formData };
    userDetails.name = data.name;
    userDetails.password = data.password;
    userDetails.email = data.email;
    setFormData(userDetails);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    authRegister({name , email ,password});
    if(name === ' '){
 setAlert('Please enter a name' , 'danger')
    }
  };

  
  if (isAuthenticated) {
    return <Navigate  to="/dashboard" />
  }
  return (
    <section className=" form-bg">
      <div className="container">
        <h1 className="large text-primarys text-center py-2">Sign Up</h1>
        <p className="leadd text-center pb-2">
          <i className="fas fa-user"></i> Create Your Account
        </p>

        <form
          className="p-5"
          style={{ backgroundColor: "#fafafa" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <Row>
            <Col md={12}>
              <Row>
                <Col md={6}>
                  <input
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger">Name is required</span>
                  )}
                  <input
                    name="password"
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: true,
                      minLength: {
                        value: 6,
                        message: "Password must have at least 6 characters",
                      },
                    })}
                  />
                  <p style={{ color: "red" }}>
                    {errors.password && <span>{errors.password.message}</span>}
                  </p>
                </Col>

                <Col md={6}>
                  <input
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />

                  {errors.email && errors.email.type === "required" && (
                    <span className="text-danger">Email is required</span>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <span className="text-danger">
                      Please , type correct email address !
                    </span>
                  )}
                  <input
                    name="password_repeat"
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    {...register("password_repeat", {
                      required: true,
                      minLength: 6,
                      validate: (value) =>
                        value === password.current ||
                        "The passwords do not match",
                    })}
                  />
                  {errors.password_repeat && (
                    <p className="text-danger">
                      {errors.password_repeat.message}
                    </p>
                  )}
                  <p style={{ color: "red" }}> {formData.error} </p>
                </Col>
              </Row>
              <button
                className="btns btns-primarys mb-2"
                onClick={handleSubmit(signupSubmit)}
              >
                Sign Up
              </button>
              <p>Already have an account ? <Link to='/login'>Sign In</Link> </p>
            </Col>
          </Row>
        </form>
      </div>
    </section>
  );
};
Register.propTypes = {
  authRegister: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated : PropTypes.bool
}
const mapStateToProps = (state, props) => ({
  isAuthenticated : state.auth.isAuthenticated,
  
})
export default connect(
  mapStateToProps ,
  {authRegister , setAlert }
) (Register);
