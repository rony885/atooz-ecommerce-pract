import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <Wrapper>
      <div className="registration">
        <div className="registration-container mt-5">
          <h2>Login To Your Account</h2>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="mt-3">
              Sign In
            </button>
          </form>
          <div className="login-link">
            <p>
              New here? Please&nbsp;
              <Link to="/signup" className="linkk">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 180px !important;
  .registration-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .registration-container h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #f80000;
    font-size: 30px;
    font-family: serif;
  }

  .registration-container input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline-color: #f80000;
  }

  .registration-container button {
    width: 100%;
    padding: 10px;
    background-color: #f80000;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    font-family: serif;
    cursor: pointer;
  }

  .registration-container button:hover {
    background-color: #ff0000cb;
  }

  .registration-container .login-link {
    text-align: center;
    margin-top: 20px;
  }

  .registration-container .login-link .linkk {
    color: #f80000;
    text-decoration: none;
  }

  .registration-container .login-link a:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    .registration-container {
      margin-bottom: 40px !important;
    }
  }
  @media only screen and (max-width: 425px) {
    margin-top: 160px !important;
    .registration {
      margin: 0 10px !important;
    }
  }
  @media only screen and (max-width: 375px) {
    .registration {
      margin: 0 10px;
    }
  }
`;

export default Login;
