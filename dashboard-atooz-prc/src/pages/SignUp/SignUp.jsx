import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
  return (
    <Wrapper>
      <div className="register-page">
        <div className="card register-card">
          <h2 className="text-center mb-4">Register</h2>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>

          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Page wrapper */
  .register-page {
    min-height: 100vh;
    background-color: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  /* Card styling */
  .register-card {
    width: 100%;
    max-width: 400px;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }

  /* Inputs */
  .register-card input.form-control {
    border-radius: 8px;
  }

  /* Button */
  .register-card .btn {
    border-radius: 8px;
    padding: 10px;
    font-weight: 500;
  }
`;

export default SignUp;
