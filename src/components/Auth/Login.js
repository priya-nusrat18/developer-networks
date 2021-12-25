import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { setAlert } from '../../Redux/Actions/alertAction';
import { authLogin } from "../../Redux/Actions/AuthActions";

const Login = ({ authLogin, isAuthenticated , setAlert }) => {
  const [formData, setFormData] = useState({
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

  // console.log(isAuthenticated);
  if (isAuthenticated) {
    return <Navigate  to="/dashboard" />
  }

  const signupSubmit = async (data) => {
    const userDetails = { ...formData };
    userDetails.password = data.password;
    userDetails.email = data.email;
    setFormData(userDetails);

    const password = data.password;
    const email = data.email;
    authLogin(email, password);
  };

  
  return (
    <section className=" form-bg">
      <div className="container">
        <h1 className="large text-primarys text-center py-2">Login</h1>
        <p className="leadd text-center pb-2">
          <i className="fas fa-user"></i> Login Your Account
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
                </Col>

                <Col md={6}>
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
              </Row>
              <button
                className="btns btns-primarys mb-2"
                onClick={handleSubmit(signupSubmit)}
              >
                Login
              </button>
              <p>
                Already have an account ? <Link to="/register">Sign up</Link>{" "}
              </p>
            </Col>
          </Row>
        </form>
      </div>
    </section>
  );
};
Login.propTypes = {
  authLogin: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert , authLogin })(Login);
